export interface LinkData {
  id: string;
  slug: string;
  destination: string;
  createdAt: string;
  clicks: number;
  status: 'active' | 'inactive';
}