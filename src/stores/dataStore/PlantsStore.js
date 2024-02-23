import { create } from 'zustand';

const defaultPlants = [
  {
    id: 1,
    name: 'Peace Lily',
    description: 'A popular indoor plant',
    address: '123 Green Street',
    city: 'Plantville',
    postalCode: '44001',
    latitude: 47.216672,
    longitude: -1.57,
    isNeedingCare: false,
    isNeedingTips: true
  },
  {
    id: 2,
    name: 'Aloe Vera',
    description: 'A plant with potential medicinal properties',
    address: '123 Herbal Lane',
    city: 'Herbville',
    postalCode: '44001',
    latitude: 47.216672,
    longitude: -1.57,
    isNeedingCare: false,
    isNeedingTips: true
  },
  {
    id: 3,
    name: 'Snake Plant',
    description: 'A hardy indoor plant',
    address: '456 Green Street',
    city: 'Plantville',
    postalCode: '44002',
    latitude: 47.216673,
    longitude: -1.58,
    isNeedingCare: false,
    isNeedingTips: false
  },
  {
    id: 4,
    name: 'Spider Plant',
    description: 'A popular houseplant with striped leaves',
    address: '789 Leafy Boulevard',
    city: 'Greentown',
    postalCode: '44003',
    latitude: 47.216674,
    longitude: -1.59,
    isNeedingCare: true,
    isNeedingTips: true
  }
];

export const usePlantsStore = create((set) => ({
  plants: defaultPlants,
  addPlant: (newPlant) => set((state) => ({ plants: [...state.plants, newPlant] })),
  updatePlant: (updatedPlant) =>
    set((state) => ({ plants: state.plants.map((plant) => (plant.id === updatedPlant.id ? updatedPlant : plant)) })),
  removePlant: (id) => set((state) => ({ plants: state.plants.filter((plant) => plant.id !== id) }))
}));
