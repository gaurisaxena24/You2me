import { useState } from "react";
import { SplashScreen } from "@/app/components/screens/SplashScreen";
import { AuthScreen } from "@/app/components/screens/AuthScreen";
import { WelcomeScreen } from "@/app/components/screens/WelcomeScreen";
import { DeviceIntroScreen } from "@/app/components/screens/DeviceIntroScreen";
import { DeviceNamingScreen } from "@/app/components/screens/DeviceNamingScreen";
import { DeviceScanningScreen } from "@/app/components/screens/DeviceScanningScreen";
import { DeviceErrorScreen } from "@/app/components/screens/DeviceErrorScreen";
import { ConnectionConfirmationScreen } from "@/app/components/screens/ConnectionConfirmationScreen";
import { LocationPermissionScreen } from "@/app/components/screens/LocationPermissionScreen";
import { PurposeValuesScreen } from "@/app/components/screens/PurposeValuesScreen";
import { SafetyControlScreen } from "@/app/components/screens/SafetyControlScreen";
import { InterestsSelectionScreen } from "@/app/components/screens/InterestsSelectionScreen";
import { AgePreferenceScreen } from "@/app/components/screens/AgePreferenceScreen";
import { DistanceSettingsScreen } from "@/app/components/screens/DistanceSettingsScreen";
import { LoadingScreen } from "@/app/components/screens/LoadingScreen";
import { GenericErrorScreen } from "@/app/components/screens/GenericErrorScreen";
import { LandingScreen } from "@/app/components/screens/LandingScreen";
import { DashboardEmptyScreen } from "@/app/components/screens/DashboardEmptyScreen";
import { ChatScreen } from "@/app/components/screens/ChatScreen";

type Screen =
  | "splash"
  | "auth"
  | "welcome"
  | "deviceIntro"
  | "deviceNaming"
  | "deviceScanning"
  | "deviceError"
  | "connectionConfirmation"
  | "locationPermission"
  | "purposeValues"
  | "safetyControl"
  | "selectInterests"
  | "agePreference"
  | "distanceSettings"
  | "loading"
  | "error"
  | "landing"
  | "dashboardEmpty"
  | "chat";

interface Person {
  id: string;
  name: string;
  interests: string[];
  icon: string;
  distance: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [userName, setUserName] = useState("Guest");
  const [deviceName, setDeviceName] = useState("");
  const [userInterests, setUserInterests] = useState<string[]>([]);
  const [agePreference, setAgePreference] = useState("");
  const [distancePreference, setDistancePreference] = useState("");
  const [currentChatPerson, setCurrentChatPerson] = useState<Person | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuth = (method: string, data?: any) => {
    // Extract name from email or use social provider
    if (data?.email) {
      const name = data.email.split("@")[0];
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    } else if (method === "apple") {
      setUserName("Alex");
    } else if (method === "google") {
      setUserName("Jordan");
    } else if (data?.phone) {
      setUserName("User");
    }
    setCurrentScreen("welcome");
  };

  const handleDeviceSelected = (deviceId: string, name: string) => {
    setDeviceName(name);
    setCurrentScreen("deviceNaming");
  };

  const handleDeviceNamed = (name: string) => {
    setDeviceName(name);
    setCurrentScreen("connectionConfirmation");
  };

  const handleLocationComplete = () => {
    setCurrentScreen("purposeValues");
  };

  const handleInterestsSelected = (interests: string[]) => {
    setUserInterests(interests);
    setCurrentScreen("agePreference");
  };

  const handleAgeSelected = (preference: string) => {
    setAgePreference(preference);
    setCurrentScreen("distanceSettings");
  };

  const handleDistanceSelected = (distance: string) => {
    setDistancePreference(distance);
    setCurrentScreen("loading");
  };

  const handleStartChat = (person: Person) => {
    setCurrentChatPerson(person);
    setCurrentScreen("chat");
  };

  const handleEditInterests = () => {
    setCurrentScreen("selectInterests");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen onComplete={() => setCurrentScreen("auth")} />;

      case "auth":
        return <AuthScreen onAuth={handleAuth} />;

      case "welcome":
        return <WelcomeScreen onNext={() => setCurrentScreen("deviceIntro")} />;

      case "deviceIntro":
        return <DeviceIntroScreen onContinue={() => setCurrentScreen("deviceScanning")} />;

      case "deviceScanning":
        return (
          <DeviceScanningScreen
            onSelectDevice={handleDeviceSelected}
            onBack={() => setCurrentScreen("deviceIntro")}
            onError={() => setCurrentScreen("deviceError")}
          />
        );

      case "deviceError":
        return (
          <DeviceErrorScreen
            onTryAgain={() => setCurrentScreen("deviceScanning")}
            onSkip={() => setCurrentScreen("locationPermission")}
          />
        );

      case "deviceNaming":
        return <DeviceNamingScreen onContinue={handleDeviceNamed} />;

      case "connectionConfirmation":
        return (
          <ConnectionConfirmationScreen
            onComplete={() => setCurrentScreen("locationPermission")}
            deviceName={deviceName}
          />
        );

      case "locationPermission":
        return (
          <LocationPermissionScreen
            onAllow={handleLocationComplete}
            onSkip={handleLocationComplete}
          />
        );

      case "purposeValues":
        return <PurposeValuesScreen onContinue={() => setCurrentScreen("safetyControl")} />;

      case "safetyControl":
        return <SafetyControlScreen onContinue={() => setCurrentScreen("selectInterests")} />;

      case "selectInterests":
        return (
          <InterestsSelectionScreen
            title="Select your interests"
            subtitle="Pick at least one — this is how YOU2ME works."
            maxSelection={5}
            onContinue={handleInterestsSelected}
          />
        );

      case "agePreference":
        return <AgePreferenceScreen onContinue={handleAgeSelected} />;

      case "distanceSettings":
        return <DistanceSettingsScreen onContinue={handleDistanceSelected} />;

      case "loading":
        return <LoadingScreen onComplete={() => setCurrentScreen("landing")} />;

      case "error":
        return (
          <GenericErrorScreen
            onRetry={() => setCurrentScreen("splash")}
            message={errorMessage}
          />
        );

      case "dashboardEmpty":
        return <DashboardEmptyScreen onChooseInterests={() => setCurrentScreen("selectInterests")} />;

      case "landing":
        return userInterests.length === 0 ? (
          <DashboardEmptyScreen onChooseInterests={() => setCurrentScreen("selectInterests")} />
        ) : (
          <LandingScreen
            userInterests={userInterests}
            userName={userName}
            onStartChat={handleStartChat}
            onEditInterests={handleEditInterests}
          />
        );

      case "chat":
        return currentChatPerson ? (
          <ChatScreen
            matchName={currentChatPerson.name}
            matchInterests={currentChatPerson.interests}
            onBack={() => setCurrentScreen("landing")}
          />
        ) : null;

      default:
        return null;
    }
  };

  return <div className="font-sans antialiased">{renderScreen()}</div>;
}
