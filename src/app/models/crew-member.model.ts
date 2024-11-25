export interface CrewMember {
  id: number;
  firstName: string;
  lastName: string;
  nationality: string;
  title: string;
  daysOnBoard: number;
  dailyRate: number;
  currency: string;
  certificates: CertificateType[];
}

export interface CertificateType {
  id: number;
  type: string;
  issueDate: string;
  expiryDate: string;
}
