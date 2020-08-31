interface BookIn {
    title: string;
    address: string;
    date: string;
    name: string;
}
export const bookEntityTemp: BookIn = {
    title: '@title',
    address: '@region @area',
    date: '@date',
    name: '@cname'
};

