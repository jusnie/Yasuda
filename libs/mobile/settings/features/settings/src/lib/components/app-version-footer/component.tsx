import { useTranslation } from '@ronas-it/react-native-common-modules/i18n';
import Constants from 'expo-constants';
import { ReactElement } from 'react';
import { useColorScheme } from '@open-webui-react-native/mobile/shared/ui/styles';
import { AppImage, AppText, Images, View } from '@open-webui-react-native/mobile/shared/ui/ui-kit';

export function AppVersionFooter(): ReactElement {
  const translate = useTranslation('APP.SETTINGS_SCREEN');
  const { isDarkColorScheme } = useColorScheme();

  const version = Constants.expoConfig?.version;

  return (
    <View className='px-content-offset items-center gap-16 pt-64 pb-16'>
      <View className='w-full gap-8'>
        {!!version && (
          <AppText className='text-sm-sm sm:text-sm text-text-secondary text-center'>
            {translate('TEXT_APP_VERSION', { version })}
          </AppText>
        )}
        <AppText className='text-sm-sm sm:text-sm text-text-secondary text-center'>
          {translate('TEXT_APP_AUTHOR')}
        </AppText>
      </View>
      <AppImage
        source={isDarkColorScheme ? Images.aiLogoDark : Images.aiLogo}
        className='w-32 h-32'
        contentFit='contain' />
    </View>
  );
}
