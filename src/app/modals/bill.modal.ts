//This billtype can be used for both get call and post call

export interface BillType {
  CustomerName: string;
  PhoneNumber: number;
  OrderDate: string;
  DeliveryDate: string;
  Status: string;
  //We can see the below only when the post call is used
  _id?: string;
  _v?: number;
}
