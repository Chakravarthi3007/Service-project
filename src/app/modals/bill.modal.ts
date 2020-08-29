//This billtype can be used for both get call and post call

export interface BillType {
  customerName: string;
  phoneNumber: number;
  orderDate: string;
  deliveryDate: string;
  status: string;
  //We can see the below only when the post call is used
  _id?: string;
  _v?: number;
}
