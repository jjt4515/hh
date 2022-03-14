import * as React from 'react';
import { WebView } from 'react-native-webview';
import { AdMobInterstitial } from 'expo-ads-admob';


export default class App extends React.Component {
	adFunction = async () => {
		await AdMobInterstitial.setAdUnitID('ca-app-pub-1870519677513892/7223294991'); 
		await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
		await AdMobInterstitial.showAdAsync();
	}
	
	componentDidMount() {
		this.adFunction();
	}
	
    render() {
   		return <WebView source={{ uri: 'https://fashionstyletest.ga/' }}/>;
	}
}	

