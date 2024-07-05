import {Controller, useForm} from 'react-hook-form';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme';
import CustomButton from '../custom/CustomButton';
import {useCallback, useEffect, useState} from 'react';
import {register} from '../../services/authService';
import CustomInput from '../custom/CustomInput';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {THotel, TReservation, TUser} from '../../types';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {getHotels} from '../../services/hotelService';
import SelectField from '../SelectField';

interface IReservationForm {
  user?: TUser;
  data?: TReservation;
  type?: 'update' | 'add';
  onSubmit: (data: any) => void;
}

const ReservationForm: React.FC<IReservationForm> = ({
  user,
  data,
  type,
  onSubmit,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openTime, setOpenTime] = useState<boolean>(false);
  const [hotels, setHotels] = useState<THotel[]>([]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: user?.nickname,
      city: data?.city,
      note: data?.note,
      date: data?.date,
      time: data?.time,
    },
  });

  useEffect(() => {
    getHotel();
  }, []);

  const getHotel = useCallback(async () => {
    const res = await getHotels();
    setHotels(res);
  }, [data?.city]);

  return (
    <View style={[theme.layout.marginTop, theme.layout.gap]}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder="Adınız"
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
            value={value}
            editable={false}
          />
        )}
        name="nickname"
      />
      {errors.nickname && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.nickname?.message != ''
            ? errors.nickname?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <SelectField
            placeholder={{
              label: 'Hotel Seçiniz',
              value: '',
            }}
            value={value?.id}
            items={hotels.map(hotel => ({
              value: String(hotel?.id),
              label: hotel.name,
            }))}
            style={{
              placeholder: {
                color: theme.colors.mainColor,
              },
            }}
            onValueChange={(value: any, index: number) => {
              const hotel = hotels.find(item => item.id === value);
              onChange(hotel);
            }}
          />
        )}
        name="city"
      />
      {errors.city && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.city?.message != ''
            ? errors.city?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                height: 60,
                width: '100%',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors.pastel,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: theme.colors.white,
                borderWidth: 1,
              }}
              onPress={() => setOpen(true)}
              activeOpacity={0.9}>
              <View style={[theme.layout.w100]}>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {value
                    ? format(new Date(value), 'dd/MM/yyyy')
                    : 'Tarih Seçiniz'}
                </Text>
              </View>
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              locale="tr-TR"
              open={open}
              date={value ? new Date(value) : new Date()}
              cancelText="İptal"
              confirmText="Onayla"
              title="Tarih Seçiniz"
              minimumDate={new Date()}
              onConfirm={date => {
                setOpen(false);
                onChange(date.toISOString());
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        )}
        name="date"
      />
      {errors.date && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.date?.message != ''
            ? errors.date?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                height: 60,
                width: '100%',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors.pastel,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: theme.colors.white,
                borderWidth: 1,
              }}
              onPress={() => setOpenTime(true)}
              activeOpacity={0.9}>
              <View style={[theme.layout.w100]}>
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {value ? value : 'Saat Seçiniz'}
                </Text>
              </View>
            </TouchableOpacity>
            <DatePicker
              modal
              open={openTime}
              mode="time"
              date={new Date(new Date().setHours(0, 0, 0, 0))}
              locale="en_GB"
              cancelText="İptal"
              confirmText="Onayla"
              title="Saat Seçiniz"
              is24hourSource="locale"
              onConfirm={date => {
                console.log(date);
                setOpenTime(false);
                onChange(format(new Date(date), 'HH:MM'));
              }}
              onCancel={() => {
                setOpenTime(false);
              }}
            />
          </View>
        )}
        name="time"
      />
      {errors.time && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.time?.message != ''
            ? errors.time?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomInput
            placeholder="Not"
            onBlur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
            value={value}
          />
        )}
        name="note"
      />
      {errors.note && (
        <Text
          style={{
            marginBottom: 10,
            color: theme.colors.accentColor,
          }}>
          {errors.time?.message != ''
            ? errors.note?.message
            : 'Bu alan zorunludur.'}
        </Text>
      )}
      <CustomButton onPress={handleSubmit(onSubmit)} title="Kayıt ol" />
    </View>
  );
};
export default ReservationForm;
