export default interface Page {
  name: string;
  state: {
    user: string;
    token: string;
    products: any;
  };
  function?: Function;
}
// maybe change this to :
//name: string
//state: {}
//functions: {}
