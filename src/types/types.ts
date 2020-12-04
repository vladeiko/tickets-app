export interface TicketType {
  ticketId: number;
  isSelected: boolean;
  number: string;
  lastUpdatedTime: string;
  owner: {
    userId: number;
    firstName: string;
    lastName: string;
    avatar: string;
    specialities: [string];
  };
  reportedTime: string;
  status: string;
  description: string;
  asset: {
    assetId: number;
    name: string;
    geoCode: string;
    kmFrom: number;
    kmTo: number;
  };
}
