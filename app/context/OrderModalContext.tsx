"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import OrderModal from "../components/OrderModal";

type Tier = 50 | 200 | 500 | 1000;

interface OrderModalContextValue {
  openModal: (defaultTier?: Tier) => void;
  closeModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextValue | null>(null);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [defaultTier, setDefaultTier] = useState<Tier | undefined>(undefined);

  const openModal = useCallback((tier?: Tier) => {
    setDefaultTier(tier);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <OrderModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <OrderModal open={open} onClose={closeModal} defaultTier={defaultTier} />
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error("useOrderModal must be used inside <OrderModalProvider>");
  return ctx;
}
