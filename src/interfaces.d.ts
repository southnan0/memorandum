interface IAppState {
  editing? : string;
  nowShowing? : any;
  [propName: string]: any;
}

interface IAppProps {
  [propName: string]: any;
}