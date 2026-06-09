import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from 'react';

import { toast } from "react-toastify";

const CartContext = createContext(null);

const STORAGE_KEY = 'karya-tani-cart';
const CART_EXPIRY_DAYS = 7;
const CART_EXPIRY_MS =
  CART_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, qty: i.qty + 1 }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
      };

    case 'INCREASE_QTY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        ),
      };

    case 'DECREASE_QTY': {
      const item = state.items.find(i => i.id === action.payload);
      if (item?.qty <= 1) {
        return {
          ...state,
          items: state.items.filter(i => i.id !== action.payload),
        };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    }

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'LOAD_CART':
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
useEffect(() => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (!stored) {
      setIsLoaded(true);
      return;
    }

    const parsed = JSON.parse(stored);

    const isExpired =
      !parsed.savedAt ||
      Date.now() - parsed.savedAt > CART_EXPIRY_MS;

    if (isExpired) {
      localStorage.removeItem(STORAGE_KEY);
      setIsLoaded(true);
      return;
    }

    if (Array.isArray(parsed.items)) {
      dispatch({
        type: 'LOAD_CART',
        payload: parsed.items,
      });
    }
  } catch (e) {
    console.warn('Cart load error:', e);
  } finally {
    setIsLoaded(true);
  }
}, []);

  // Save to localStorage on change
useEffect(() => {
  if (!isLoaded) return;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        items: state.items,
        savedAt: Date.now(),
      })
    );
  } catch (e) {
    console.warn('Cart save error:', e);
  }
}, [state.items, isLoaded]);

  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const addItem = (product) => {
  dispatch({ type: 'ADD_ITEM', payload: product });

  toast.success(`${product.name} berhasil ditambahkan ke keranjang`, {
    icon: false,
  position: "bottom-right",
  });
};
const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const increaseQty = (id) => dispatch({ type: 'INCREASE_QTY', payload: id });
  const decreaseQty = (id) => dispatch({ type: 'DECREASE_QTY', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{
      items: state.items,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      increaseQty,
      decreaseQty,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
