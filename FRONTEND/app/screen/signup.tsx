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
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const handleSignUp = () => {
    
    console.log('Sign Up pressed - bypassing form');
    router.replace('/tabs/add'); 
  };

  const handleLogin = () => {
    router.replace('/screen/login');
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

      <Image
        source={require('../../assets/images/bg.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.appName}>TINAW</Text>
          <Text style={styles.subtitle}>IOT Crayfish Monitoring System</Text>

          <Text style={styles.createAccountTitle}>Create Account</Text>
          <Text style={styles.loginPrompt}>Please sign up to continue</Text>

          <View style={styles.formContainer}>

            {/* Name */}
            <View style={styles.iconInputWrapper}>
              <Image
                source={require('../../assets/images/user.png')}
                style={styles.inputIcon}
                resizeMode="contain"
              />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Full Name"
                placeholderTextColor="#9DB2CE"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>

            {/* Email */}
            <View style={styles.iconInputWrapper}>
              <Image
                source={require('../../assets/images/email.png')}
                style={styles.inputIcon}
                resizeMode="contain"
              />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Email Address"
                placeholderTextColor="#9DB2CE"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password */}
            <View style={styles.iconInputWrapper}>
              <Image
                source={require('../../assets/images/pass.png')}
                style={styles.inputIcon}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.inputWithIcon, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="#9DB2CE"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                <Image
                  source={require('../../assets/images/eye.png')}
                  style={[styles.eyeIcon, showPassword && styles.eyeIconActive]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <View style={styles.iconInputWrapper}>
              <Image
                source={require('../../assets/images/pass.png')}
                style={styles.inputIcon}
                resizeMode="contain"
              />
              <TextInput
                style={[styles.inputWithIcon, styles.passwordInput]}
                placeholder="Confirm Password"
                placeholderTextColor="#9DB2CE"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeButton}>
                <Image
                  source={require('../../assets/images/eye.png')}
                  style={[styles.eyeIcon, showConfirmPassword && styles.eyeIconActive]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp} activeOpacity={0.8}>
              <Text style={styles.signUpButtonText}>SIGN UP</Text>
            </TouchableOpacity>

            {/* Already have account */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>

          </View>

          <Text style={styles.footer}>TINAW © 2026</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) + 10 : 20,
    paddingBottom: 30,
  },
  logo: {
    width: 350,
    height: 300,
    marginBottom: -100,
  },
  appName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 34,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 22,
    opacity: 0.9,
  },
  createAccountTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 4,
  },
  loginPrompt: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#08306B',
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.7,
  },
  formContainer: {
    width: '100%',
    maxWidth: 380,
    gap: 14,
    alignItems: 'center',
  },
  iconInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    borderRadius: 14,
    paddingHorizontal: 14,
    width: '100%',
    minHeight: 55,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 12,
    tintColor: '#08306B',
    opacity: 0.7,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#08306B',
    paddingVertical: 14,
  },
  passwordInput: {
    marginRight: 36,
  },
  eyeButton: {
    position: 'absolute',
    right: 12,
    padding: 4,
  },
  eyeIcon: {
    width: 22,
    height: 22,
    tintColor: '#08306B',
    opacity: 0.5,
  },
  eyeIconActive: {
    opacity: 1,
    tintColor: '#4292C6',
  },
  signUpButton: {
    backgroundColor: '#4292C6',
    borderRadius: 30,
    width: '60%',
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  signUpButtonText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 15,
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  loginText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#9DB2CE',
  },
  loginLink: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 13,
    color: '#08306B',
    textDecorationLine: 'underline',
  },
  footer: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: '#9DB2CE',
    textAlign: 'center',
    marginTop: 24,
    opacity: 0.6,
    letterSpacing: 1,
  },
});

export default SignUpScreen;