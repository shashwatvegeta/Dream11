import React, {useState} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For back button and icons
import { SafeAreaView } from 'react-native-web';

const players = [
  { id: '1', name: 'H Klaasen', team: 'SA', selection: '88.93%', points: '0', credits: '9.0', image: 'image1' },
  { id: '2', name: 'S Samson', team: 'IND', selection: '75.95%', points: '0', credits: '8.0', image: 'image2' },
  { id: '3', name: 'R Rickelton', team: 'SA', selection: '10.06%', points: '0', credits: '7.0', image: 'image3' },
  { id: '4', name: 'J Sharma', team: 'IND', selection: '1.61%', points: '0', credits: '6.0', image: 'image4' },
];

const TeamSelectionScreen = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const renderItem = ({ item }) => (
    
    <TouchableOpacity style={styles.playerContainer}
    onLongPress={() => setSelectedPlayer(item)}

    >
      <TouchableOpacity style={styles.infoIcon}>
        <Icon name="info" size={16} color="#666" />
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.playerImage} />
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.selectionText}>Sel by {item.selection}</Text>
      </View>
      <View style={styles.pointsCreditsContainer}>
        <Text style={styles.pointsText}>{item.points}</Text>
        <Text style={styles.creditsText}>{item.credits}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  const PlayerStatsModal = ({ player, onClose }) => {
    return (
      <Modal visible={!!player} transparent animationType="fade" onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{player?.name}</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Icon name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Avg. Points</Text>
                <Text style={styles.statValue}>45.2</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Strike Rate</Text>
                <Text style={styles.statValue}>135.4%</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Predicted Points</Text>
                <Text style={styles.statValue}>53.1</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Team 2</Text>
          <View style={styles.headerRight}>
            <View style={styles.gurusContainer}>
              <Icon name="shield" size={16} color="#FFD700" />
              <Text style={styles.gurusText}>GURUS</Text>
            </View>
            <View style={styles.ptsContainer}>
              <Text style={styles.ptsText}>PTS</Text>
            </View>
          </View>
        </View>
        <Text style={styles.timeLeft}>8h 17m left</Text>
        <Text style={styles.maxPlayerText}>Maximum of 10 players from one team</Text>
        
        <View style={styles.teamStatsContainer}>
          <View style={styles.teamStat}>
            <Image source={require('@/assets/images/react-logo.png')} style={styles.flagIcon} />
            <Text style={styles.teamCount}>0</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              {/* Add progress segments here */}
            </View>
            <Text style={styles.totalPlayers}>/11</Text>
          </View>
          <View style={styles.teamStat}>
            <Image source={require('@/assets/images/react-logo.png')} style={styles.flagIcon} />
            <Text style={styles.teamCount}>0</Text>
          </View>
          <Text style={styles.creditsLeftText}>100</Text>
        </View>

        <View style={styles.pitchInfoContainer}>
          <Text style={styles.pitchInfoText}>Pitch: Batting</Text>
          <Text style={styles.dotSeparator}>•</Text>
          <Text style={styles.pitchInfoText}>Good for: Pace</Text>
          <Text style={styles.dotSeparator}>•</Text>
          <Text style={styles.pitchInfoText}>Avg Score:</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>WK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>BAT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>AR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>BOWL</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.selectionGuide}>Select 1 - 8 Wicket-Keepers</Text>

      <View style={styles.listHeaderContainer}>
        <Text style={styles.listHeaderText}>SELECTED BY</Text>
        <Text style={styles.listHeaderText}>POINTS</Text>
        <Text style={styles.listHeaderText}>CREDITS ↓</Text>
      </View>

      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.roleIconsContainer}>
          <Icon name="refresh" size={20} color="#666" />
          <Icon name="speed" size={20} color="#666" />
          <Icon name="backup" size={20} color="#666" />
          <Icon name="info" size={20} color="#666" />
        </View>
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.previewButton}>
            <Icon name="visibility" size={20} color="#fff" />
            <Text style={styles.previewButtonText}>PREVIEW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lineupButton}>
            <Icon name="group" size={20} color="#666" />
            <Text style={styles.lineupButtonText}>LINEUP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
          <PlayerStatsModal player={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop: 40,
  },
  header: {
    backgroundColor: '#1a1a1a',
    padding: 15,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gurusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 4,
    marginRight: 10,
  },
  gurusText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
  ptsContainer: {
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 15,
  },
  ptsText: {
    color: '#fff',
    fontSize: 12,
  },
  timeLeft: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  maxPlayerText: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  teamStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  teamStat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  teamCount: {
    color: '#fff',
    fontSize: 16,
  },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
  },
  totalPlayers: {
    color: '#fff',
    marginLeft: 5,
  },
  creditsLeftText: {
    color: '#fff',
    fontSize: 16,
  },
  pitchInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  pitchInfoText: {
    color: '#888',
    fontSize: 12,
  },
  dotSeparator: {
    color: '#888',
    marginHorizontal: 5,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#e91e63',
  },
  tabText: {
    color: '#666',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#e91e63',
  },
  selectionGuide: {
    padding: 15,
    color: '#666',
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listHeaderText: {
    color: '#666',
    fontSize: 12,
    marginLeft: 20,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoIcon: {
    padding: 5,
  },
  playerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectionText: {
    color: '#666',
    fontSize: 12,
  },
  pointsCreditsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    width: 30,
    textAlign: 'center',
    color: '#666',
  },
  creditsText: {
    width: 30,
    textAlign: 'center',
    color: '#666',
  },
  addButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 10,
    elevation: 8,
  },
  roleIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 4,
    marginRight: 5,
  },
  previewButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  lineupButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  lineupButtonText: {
    color: '#666',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 4,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    maxWidth: 400,
    elevation: 4,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 8,
  },
  statsContainer: {
    padding: 16,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TeamSelectionScreen;