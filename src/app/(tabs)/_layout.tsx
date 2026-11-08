import { NativeTabs } from "expo-router/build/native-tabs/NativeTabs.js";

export default function TabsLayout() {
  return (
    <NativeTabs
      tintColor={"#FEB200"}
      backgroundColor={"white"}
      disableTransparentOnScrollEdge
    >
      <NativeTabs.Trigger
        name="index"
        contentStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name="saved"
        contentStyle={{ backgroundColor: "#FFFFFF" }}
      >
        <NativeTabs.Trigger.Icon sf="bookmark.fill" md="bookmark" />
        <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
