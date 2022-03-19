package com.rn_snackbar_native_module;
import android.view.View;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.material.snackbar.Snackbar;

import java.util.Map;
import java.util.HashMap;

public class SnackBarModule extends ReactContextBaseJavaModule {
   SnackBarModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
   public String getName() {
       return "SnackbarModule";
   }

   @ReactMethod
   public void initCustomSnackBar(String message) {
    View parentLayout = getCurrentActivity().findViewById(android.R.id.content);
    Snackbar.make(parentLayout, "This is main activity", Snackbar.LENGTH_LONG)
         .setAction("CLOSE", new View.OnClickListener() {
             @Override 
             public void onClick(View view) {
 
             } 
         }) 
         .setActionTextColor(getCurrentActivity().getResources().getColor(android.R.color.colorAccent))
         .show(); 
   }

}