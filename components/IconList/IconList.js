import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import IconItem from "./IconItem";
import { ICONS } from "../../data/iconNames";

const ITEM_SIZE = 50;
const ITEM_MARGIN = 12;
const CELL_SIZE = ITEM_SIZE + ITEM_MARGIN * 2;

function IconList() {
  const { width } = useWindowDimensions();
  const numColumns = Math.floor(width / CELL_SIZE);
  return (
    <FlatList
      data={ICONS}
      key={numColumns}
      keyExtractor={(item) => item}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <IconItem
          iconName={item}
          itemSize={ITEM_SIZE}
          marginSize={ITEM_MARGIN}
        />
      )}
      style={styles.list}
    />
  );
}

export default IconList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
