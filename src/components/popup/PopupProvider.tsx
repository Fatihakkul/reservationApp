import React, {PropsWithChildren, useEffect, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

type Props = PropsWithChildren<{
  children?: React.ReactNode;
  visible?: boolean;
  backDropColor?: string;
}>;

const PopupProvider = ({visible, children, backDropColor}: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['100%', '100%'], []);
  useEffect(() => {
    if (visible) {
      bottomSheetModalRef.current?.present();
      return;
    }
    bottomSheetModalRef.current?.dismiss();
  }, [visible]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      detached={true}
      snapPoints={snapPoints}
      enableContentPanningGesture={false}
      handleIndicatorStyle={{backgroundColor: 'transparent'}}
      backgroundStyle={{
        backgroundColor: 'transparent',
        borderRadius: 0,
      }}>
      <BottomSheetView style={styles.bottomSheetView}>
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};
export default PopupProvider;

const styles = StyleSheet.create({
  btn: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fa9dc1',
    padding: 5,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ff74ae',
    padding: 10,
  },
  content: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
  },
  bottomSheetView: {
    overflow: 'hidden',
    flex: 1,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
