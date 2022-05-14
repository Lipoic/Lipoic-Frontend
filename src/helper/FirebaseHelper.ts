import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  getAnalytics,
  initializeAnalytics,
  logEvent,
} from 'firebase/analytics';

// https://firebase.google.com/docs/web/setup#available-libraries
class FirebaseHelper {
  static init() {
    if (process.env.NODE_ENV !== 'production') return;
    console.log('Initializing Firebase...');

    const config: FirebaseOptions = {
      apiKey: 'AIzaSyCpTTAbz5Ppd2ZHb0O8nDf4Z-xK4fJ7Bjs',
      authDomain: 'lipoic-5216d.firebaseapp.com',
      projectId: 'lipoic-5216d',
      storageBucket: 'lipoic-5216d.appspot.com',
      messagingSenderId: '857283190947',
      appId: '1:857283190947:web:9389501d9226a5aee0df16',
      measurementId: 'G-JTCBZF8K1G',
    };

    // Initialize Firebase
    const app = initializeApp(config);
    FirebaseHelper.initAnalytics(app);
  }

  private static initAnalytics(app: FirebaseApp) {
    initializeAnalytics(app);
    const analytics = getAnalytics(app);
    logEvent(analytics, 'user_engagement');
  }
}

export default FirebaseHelper;
