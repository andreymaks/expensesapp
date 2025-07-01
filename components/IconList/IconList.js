import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useCallback } from "react";

import IconItem from "./IconItem";
import { ICONS } from "../../data/iconNames";

const ITEM_SIZE = 50;
const ITEM_MARGIN = 12;
const CELL_SIZE = ITEM_SIZE + ITEM_MARGIN * 2;

function IconList({ selectedIcon, setSelectedIcon }) {
  const { width } = useWindowDimensions();
  const numColumns = Math.floor(width / CELL_SIZE);

  const renderItem = useCallback(
    ({ item }) => (
      <IconItem
        iconName={item}
        itemSize={ITEM_SIZE}
        marginSize={ITEM_MARGIN}
        onPress={setSelectedIcon}
        isSelected={item === selectedIcon}
      />
    ),
    [selectedIcon, setSelectedIcon]
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={ICONS}
        extraData={selectedIcon}
        key={numColumns}
        keyExtractor={(item) => item}
        numColumns={numColumns}
        renderItem={renderItem}
      />
    </View>
  );
}

export default IconList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
});
