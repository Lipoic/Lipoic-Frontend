import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import {
  Analytics,
  getAnalytics,
  initializeAnalytics,
  logEvent,
} from 'firebase/analytics';

/**
 * https://firebase.google.com/docs/web/setup#available-libraries
 */
class FirebaseHelper {
  static app: FirebaseApp | null = null;

  /**
   * Initialize the firebase app instance.
   */
  static init() {
    // If the app is production mode, initialize Firebase.
    if (import.meta.env.NODE_ENV !== 'production') return;
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
    this.app = app;
    FirebaseHelper.initAnalytics(app);
  }

  private static initAnalytics(app: FirebaseApp) {
    initializeAnalytics(app);
    const analytics = getAnalytics(app);

    logEvent(analytics, 'user_engagement');
  }

  static getAnalytics(): Analytics | null {
    if (this.app === null) return null;
    return getAnalytics(this.app);
  }
}

export default FirebaseHelper;
