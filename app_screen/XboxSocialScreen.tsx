import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const friends = [
  { id: '1', name: 'Millo480', realName: 'Jahel Heli Hernández Hernández', status: 'Desconectado', avatar: require('../images/perfil2.jpg') },
  { id: '2', name: 'StressfulBear0', realName: 'Claudys te amo cielo', status: 'Desconectado', avatar: require('../images/perfil3.jpg') },
  { id: '3', name: 'The Room Azamar', realName: 'Gabi Rojas', status: 'Último visto hace 67 días: F1® Manager 2024', avatar: require('../images/perfil4.jpeg') },
  { id: '4', name: 'Tona', realName: '#8778', status: 'Último visto hace 304 días: Minecraft', avatar: require('../images/perfil5.jpeg') },
];

const friends_online = [
    {id: '1', name: 'ALEXF90FUT', realName: 'Alex Varela', status: 'EA SPORTS FC 25 para Xbox One ', avatar: require('../images/perfil6.png') },
    {id: '2', name: 'BGA123', realName: '#3900 ben perkison', status: 'Netflix', avatar: require('../images/perfil7.jpeg')},
    {id: '3', name: 'OldOsprey845856', realName: 'jonatan pérez arias', status: 'YouTube', avatar: require('../images/perfil8.jpeg') },
    {id: '4', name: 'Ryuk07xone', realName: 'Leonny Alves', status: 'En línea', avatar: require('../images/perfil9.jpeg') },
]

export default function XboxSocialScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/perfil.jpeg')} style={styles.profilePic} />
        <Text style={styles.title}>Redes Sociales</Text>
        <Text style={styles.icon}>🔒</Text>
        <Text style={styles.icon}>✏️</Text>
      </View>

      <View style={styles.navbar}>
        <Text style={styles.navItem}>Amigos</Text>
        <Text style={styles.navItem}>Grupos</Text>
        <Text style={styles.navItem}>Chats</Text>
      </View>

      <View style={styles.friendRequest}>
        <Text style={styles.requestText}>Solicitudes de amistad</Text>
        <View style={styles.requestBadgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
          <Text style={styles.arrow}>➤</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <FlatList
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Image source={item.avatar} style={styles.friendAvatar} />
              <View>
                <Text style={styles.friendName}>{item.name}</Text>
                <Text style={styles.friendRealName}>{item.realName}</Text>
                <Text style={styles.friendStatus}>{item.status}</Text>
              </View>
            </View>
          )}
        />

        <Text style={styles.sectionTitle}>En línea</Text>
        <FlatList
          data={friends_online}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Image source={item.avatar} style={styles.friendAvatar} />
              <View>
                <Text style={styles.friendName}>{item.name}</Text>
                <Text style={styles.friendRealName}>{item.realName}</Text>
                <Text style={styles.friendStatus}>{item.status}</Text>
              </View>
            </View>
          )}
        />

      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerIcon}>🏠</Text>
        <Text style={styles.footerIcon}>👥</Text>
        <Text style={styles.footerIcon}>🔍</Text>
        <Text style={styles.footerIcon}>📚</Text>
        <Text style={styles.footerIcon}>🎮</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212' 
  },

  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 15 
  },

  profilePic: { 
    width: 50, 
    height: 50, 
    borderRadius: 25 
  },

  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#fff' 
  },

  icon: { 
    fontSize: 20, 
    color: '#fff' 
  },

  navbar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    backgroundColor: '#1e1e1e' 
  },

  navItem: { 
    color: '#fff', 
    fontSize: 16 
  },

  scrollContainer: { 
    flex: 1, 
    padding: 10 
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 10 
  },

  friendItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10, 
    borderRadius: 10, 
    backgroundColor: '#1e1e1e', 
    marginBottom: 10 
  },

  friendAvatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10 
  },

  friendName: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },

  friendRealName: { 
    color: '#bbb', 
    fontSize: 14 
  },

  friendStatus: { 
    color: '#bbb', 
    fontSize: 12 
  },

  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10, 
    backgroundColor: '#1e1e1e' 
  },

  footerIcon: { 
    fontSize: 24, 
    color: '#fff' 
  },

  friendRequest: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#1e1e1e', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 10 
  },

  requestText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },

  requestBadgeContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  badge: { 
    backgroundColor: '#0F780F', 
    width: 22, 
    height: 22, 
    borderRadius: 11, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 10 
  },

  badgeText: { 
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold' 
  },

  arrow: { 
    color: '#fff', 
    fontSize: 18 
  }
});

