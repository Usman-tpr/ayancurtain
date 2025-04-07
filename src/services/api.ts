const API_BASE_URL = 'http://localhost:5000/api'; // Update this with your backend URL

export interface Curtain {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export const api = {
  // Get all curtains
  getAllCurtains: async (): Promise<Curtain[]> => {
    const response = await fetch(`${API_BASE_URL}/curtains`);
    if (!response.ok) {
      throw new Error('Failed to fetch curtains');
    }
    return response.json();
  },

  // Get single curtain
  getCurtainById: async (id: string): Promise<Curtain> => {
    const response = await fetch(`${API_BASE_URL}/curtains/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch curtain');
    }
    return response.json();
  },

  // Create new curtain
  createCurtain: async (curtainData: FormData): Promise<Curtain> => {
    const response = await fetch(`${API_BASE_URL}/curtains`, {
      method: 'POST',
      body: curtainData,
    });
    if (!response.ok) {
      throw new Error('Failed to create curtain');
    }
    return response.json();
  },

  // Update curtain
  updateCurtain: async (id: string, curtainData: FormData): Promise<Curtain> => {
    const response = await fetch(`${API_BASE_URL}/curtains/${id}`, {
      method: 'PUT',
      body: curtainData,
    });
    if (!response.ok) {
      throw new Error('Failed to update curtain');
    }
    return response.json();
  },

  // Delete curtain
  deleteCurtain: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/curtains/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete curtain');
    }
  },
}; 