
export type CustomerType = 'regular'|'vip';
export interface Customer {
    name: string;
    level: CustomerType;
}
const customer:Customer ={
    name:'CUSTOMER INTERFACE',
    level:"regular"
};