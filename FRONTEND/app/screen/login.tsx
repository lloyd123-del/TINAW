import React, { useState } from 'react';
import { router } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator, // Add this import
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const handleLogin = () => {
    console.log('Login pressed');
    router.replace('../tabs/home');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleSignUp = () => {
    console.log('Sign up');
    router.replace('../screen/signup');
  };

  // Show loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4292C6" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      
      {/* Background Image */}
      <Image
        source={require('../../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      {/* Semi-transparent overlay for better form visibility */}
      <View style={styles.overlay} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        {/* Content - Fixed layout without ScrollView */}
        <View style={styles.content}>
          {/* Logo */}
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          
          {/* App Name - Fixed font family names */}
          <Text style={styles.appName}>TINAW</Text>
          
          {/* Subtitle */}
          <Text style={styles.subtitle}>IOT Crayfish Monitoring System</Text>
          
          {/* Login Prompt */}
          <Text style={styles.loginPrompt}>Please Login to continue</Text>
          
          {/* Login Form */}
          <View style={styles.formContainer}>
            {/* Email Input with Icon */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <View style={styles.iconInputWrapper}>
                <Image
                  source={require('../../assets/images/email.png')}
                  style={styles.emailIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.inputWithIcon}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Enter your email"
                  placeholderTextColor="#9DB2CE"
                />
              </View>
            </View>
            
            {/* Password Input with Icon and Eye Toggle */}
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.iconInputWrapper}>
                <Image
                  source={require('../../assets/images/pass.png')}
                  style={styles.passIcon}
                  resizeMode="contain"
                />
                <TextInput
                  style={[styles.inputWithIcon, styles.passwordInputWithIcon]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#9DB2CE"
                />
                <TouchableOpacity 
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Image
                    source={require('../../assets/images/eye.png')}
                    style={[
                      styles.eyeIconImage,
                      showPassword && styles.eyeIconActive
                    ]}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Forgot Password */}
            <TouchableOpacity 
              onPress={handleForgotPassword}
              style={styles.forgotPasswordContainer}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            
            {/* Login Button */}
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
            
            {/* Sign Up Link */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Footer */}
          <Text style={styles.footer}>TINAW © 2026</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  // Add loading container style
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
  },
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: 400,
    height: 360,
    marginBottom: -120,
  },
  appName: {
    fontFamily: 'Poppins_700Bold', // Changed from 'Poppins-Bold'
    fontSize: 36,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 14,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 50,
    opacity: 0.9,
  },
  loginPrompt: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 15,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 15,
    opacity: 0.8,
  },
  formContainer: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 14,
  },
  inputLabel: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 13,
    color: '#08306B',
    marginBottom: 5,
    fontWeight: '500',
  },
  iconInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 8,
    minHeight: 55,
  },
  emailIcon: {
    width: 35,
    height: 40,
    marginRight: 10,
    tintColor: '#08306B',
    opacity: 0.8,
    resizeMode: 'contain',
  },
  passIcon: {
    width: 40,
    height: 35,
    marginRight: 8,
    marginLeft: -2,
    tintColor: '#08306B',
    opacity: 0.8,
    resizeMode: 'contain',
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 13,
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    color: '#08306B',
  },
  passwordInputWithIcon: {
    marginRight: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 8,
    padding: 4,
  },
  eyeIconImage: {
    width: 35,
    height: 40,
    tintColor: '#08306B',
    opacity: 0.6,
    resizeMode: 'contain',
  },
  eyeIconActive: {
    opacity: 1,
    tintColor: '#4292C6',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 12,
    color: '#9DB2CE',
    opacity: 0.7,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4292C6',
    borderRadius: 30,
    width: '60%',
    padding: 14,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    fontFamily: 'Poppins_700Bold', // Changed from 'Poppins-Bold'
    fontSize: 15,
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 13,
    color: '#9DB2CE',
    opacity: 0.8,
  },
  signUpLink: {
    fontFamily: 'Poppins_700Bold', // Changed from 'Poppins-Bold'
    fontSize: 12,
    color: '#08306B',
    textDecorationLine: 'underline',
  },
  footer: {
    fontFamily: 'Poppins_400Regular', // Changed from 'Poppins-Regular'
    fontSize: 14,
    color: '#9DB2CE',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 30,
    opacity: 0.6,
    letterSpacing: 1,
  },
});

export default LoginScreen;