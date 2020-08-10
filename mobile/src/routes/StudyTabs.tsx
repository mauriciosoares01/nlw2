import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
	return (
		<Navigator
			tabBarOptions={{
				style: {
					elevation: 0,
					shadowOpacity: 0,
					height: 90,
				},
				tabStyle: {
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				},
				iconStyle: {
					flex: 0,
					height: 20,
					width: 20,
				},
				labelStyle: {
					fontFamily: "Archivo_700Bold",
					fontSize: 13,
					marginLeft: 16,
				},
				inactiveBackgroundColor: "#fafafc",
				activeBackgroundColor: "#ebebf5",
				inactiveTintColor: "#999",
				activeTintColor: "#32264d",
			}}
		>
			<Screen
				name="TeacherList"
				component={TeacherList}
				options={{
					tabBarLabel: "Proffys",
					tabBarIcon: ({ color, focused }) => {
						return (
							<Ionicons
								name="ios-easel"
								color={focused ? "#8257e5" : color}
								size={20}
							/>
						);
					},
				}}
			/>
			<Screen
				name="Favorites"
				component={Favorites}
				options={{
					tabBarLabel: "Favoritos",
					tabBarIcon: ({ color, focused }) => {
						return (
							<Ionicons
								name="ios-heart"
								color={focused ? "#8257e5" : color}
								size={20}
							/>
						);
					},
				}}
			/>
		</Navigator>
	);
}

export default StudyTabs;
