const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export interface Pizza {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

interface Order {
  id: string;
  items: {
    id: string;
    quantity: number;
  }[];
  status: string;
  totalPrice: number;
  createdAt: string;
}

interface CreateOrderRequest {
  items: {
    id: string;
    quantity: number;
  }[];
}

interface UpdateOrderRequest {
  items?: {
    id: string;
    quantity: number;
  }[];
  status?: string;
}

export async function getMenu(): Promise<Pizza[]> {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong),
  // so we need to do it manually.
  // This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data }: { data: Pizza[] } = await res.json();
  return data;
}

export async function getOrder(id: string): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data }: { data: Order } = await res.json();
  return data;
}

export async function createOrder(
  newOrder: CreateOrderRequest
): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed creating your order");

    const { data }: { data: Order } = await res.json();
    return data;
  } catch {
    throw new Error("Failed creating your order");
  }
}

export async function updateOrder(
  id: string,
  updateObj: UpdateOrderRequest
): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch {
    throw Error("Failed updating your order");
  }
}
