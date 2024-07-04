export type TabNavigationStackParamList = {
  Home: undefined;
  ReservationMap: undefined
};


export type TTabs = {
  name: 'Home' | 'ReservationMap';
  label: string; 
  icon: (props: any) => React.JSX.Element;
  fillIcon: (props: any) => React.JSX.Element;
};
