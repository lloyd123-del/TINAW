import React, { useState } from 'react';
import { router } from 'expo-router';
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
} from 'react-native';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login pressed');
    router.replace('../tabs/home'); // Navigate to the home screen after login
  };

  const handleForgotPassword = () => {
    // Add forgot password navigation
    console.log('Forgot password');
  };

  const handleSignUp = () => {
    // Add sign up navigation
    console.log('Sign up');
  };

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
          
          {/* App Name */}
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
    justifyContent: 'center', // This centers everything vertically
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: 400, // Reduced from 500
    height: 360, // Reduced from 600
    marginBottom: -120, // Adjusted
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36, // Slightly reduced
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14, // Slightly reduced
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 50, // Reduced
    opacity: 0.9,
  },
  loginPrompt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15, // Slightly reduced
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 15, // Reduced
    opacity: 0.8,
  },
  formContainer: {
    width: '100%',
    maxWidth: 380, // Slightly reduced
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 18, // Slightly reduced
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20, // Reduced
  },
  inputContainer: {
    marginBottom: 14, // Slightly reduced
  },
  inputLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13, // Slightly reduced
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
    borderColor: '#E0E7F0',
    paddingHorizontal: 8,
    minHeight: 55, // Slightly reduced
  },
  emailIcon: {
    width: 35, // Reduced
    height: 40, // Reduced
    marginRight: 10,
    tintColor: '#08306B',
    opacity: 0.8,
    resizeMode: 'contain',
  },
  passIcon: {
    width: 40, // Adjusted
    height: 35, // Adjusted
    marginRight: 8,
    marginLeft: -2,
    tintColor: '#08306B',
    opacity: 0.8,
    resizeMode: 'contain',
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: 12, // Slightly reduced
    fontSize: 13, // Slightly reduced
    fontFamily: 'Poppins-Regular',
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
    width: 35, // Reduced
    height: 40, // Reduced
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
    marginBottom: 16, // Reduced
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12, // Slightly reduced
    color: '#9DB2CE',
    opacity: 0.7,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4292C6',
    borderRadius: 30,
    width: '60%',
    padding: 14, // Slightly reduced
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 14, // Reduced
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15, // Slightly reduced
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13, // Slightly reduced
    color: '#9DB2CE',
    opacity: 0.8,
  },
  signUpLink: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12, // Slightly reduced
    color: '#08306B',
    textDecorationLine: 'underline',
  },
  footer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14, // Slightly reduced
    color: '#9DB2CE',
    textAlign: 'center',
    marginTop: 100, // Reduced
    marginBottom: 30, // Reduced
    opacity: 0.6,
    letterSpacing: 1,
  },
});

export default LoginScreen;