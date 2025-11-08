import { createContext, useContext, useState, useEffect } from 'react';

const OrdersContext = createContext();

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within OrdersProvider');
  }
  return context;
};

export const OrdersProvider = ({ children }) => {
  // We'll get user from UserContext inside the component that uses it
  const [orders, setOrders] = useState(() => {
    // Load orders from localStorage on mount
    try {
      const savedOrders = localStorage.getItem('glamora_orders');
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error('Error loading orders from localStorage:', error);
      return [];
    }
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('glamora_orders', JSON.stringify(orders));
    } catch (error) {
      console.error('Error saving orders to localStorage:', error);
    }
  }, [orders]);

  const placeOrder = (cartItems, shippingAddress, paymentMethod = 'Cash on Delivery', userId) => {
    if (!userId) {
      throw new Error('User must be logged in to place an order');
    }

    const order = {
      id: `ORD-${Date.now()}`,
      userId: userId,
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      shippingAddress: shippingAddress || {},
      paymentMethod,
      status: 'pending',
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    };

    setOrders(prev => [order, ...prev]);
    return order;
  };

  const getUserOrders = (userId) => {
    if (!userId) return [];
    return orders.filter(order => order.userId === userId);
  };

  const getOrderById = (orderId) => {
    return orders.find(order => order.id === orderId);
  };

  const updateOrderStatus = (orderId, status) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  return (
    <OrdersContext.Provider
      value={{
        allOrders: orders,
        placeOrder,
        getOrderById,
        updateOrderStatus,
        getUserOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

