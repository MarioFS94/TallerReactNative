Instalación
------------
-	npm i -g react-native-cli
-	react-native init Ecommerce - Crear proyecto
-   Tener configurado para que funcione el adb con nuestro emulador AndroidStudio:
    -	Variables del sistema: ANDROID_HOME con valor: C:\Users\mario.fernandezsuare\AppData\Local\Android\Sdk
    -	En el path: C:\Users\mario.fernandezsuare\AppData\Local\Android\Sdk\platform-tools
-    react-native start - Iniciar Metro builder
-    react-native run-android - Iniciar app en emulador AndroidStudio
-   npm install -g json-server
    -   En scripts-> package.json: "json": "json-server --watch ./src/assets/db.json  --port 3004"
-   npm i react-native-elements --save
    -   npm i --save react-native-vector-icons
    -   react-native link react-native-vector-icons

Navigation
-----------------
-	npm install react-navigation
-	npm install react-native-gesture-handler
    -	react-native link react-native-gesture-handler
-	Añadir este código al MainActivity.java de android:

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
-	Antes createAppContainer y createStackNavigator se importaban de react-navigation pero ahora ha cambiado; 
    -	npm i react-navigation-stack
    -	import { createStackNavigator } from "react-navigation-stack";
-   npm install @react-navigation/native
-   npm install @react-navigation/stack
-   npm install @react-navigation/drawer
-   npm install -g react-devtools
    -   react-devtools
    -   ctrl + M -> Toogle debbbuger

Ver logs en terminal
------------------------
- npm run log (ver scripts package.json)

Para imagenes
------------------------
-   npm install react-native-svg --save
    -	react-native link react-native-svg
