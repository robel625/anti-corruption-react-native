import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import TreeSelect from 'react-native-tree-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTranslation} from 'react-i18next';
import {colorsPalette} from './styles';
import { treeData } from './TreeData';

const AddModel = ({handleChangeInfo, modalVisible, onToggle}) => {
  

  const [value, setValue] = useState('');

  const {t} = useTranslation();

  const handleClick = value => {
    setValue(value.item.name);
    console.log('Selected value:', value.item.name);
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onToggle}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContainerinner}>
          <TouchableOpacity onPress={onToggle}>
            <Icon
              name={'close-circle-outline'}
              size={24}
              color="red"
              style={{position: 'absolute', padding: 10, alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>
            {t(
              'To which EEU (Region, District, CSC) to inform your suggestion (optional)',
            )}
          </Text>

          <TreeSelect
            data={treeData}
            // isOpen
            // openIds={['A01']}
            // defaultSelectedId={['B062']}
            isShowTreeId={false}
            selectType="single"
            // selectType="multiple"
            itemStyle={{
              // backgroudColor: '#8bb0ee',
              fontSize: 15,
              color: '#995962',
            }}
            selectedItemStyle={{
              backgroudColor: '#f7edca',
              fontSize: 18,
              color: '#171e99',
            }}
            onChange={selectedNode => setValue(selectedNode?.value)}
            onClick={handleClick}
            // onClick={this._onClick}

            onClickLeaf={this._onClickLeaf}
            treeNodeStyle={
              {
                // openIcon: <Icon size={18} color="#171e99" style={{ marginRight: 10 }} name="ios-arrow-down" />,
                // closeIcon: <Icon size={18} color="#171e99" style={{ marginRight: 10 }} name="ios-arrow-forward" />
                // openIcon: <Image
                //   resizeMode="stretch"
                //   style={{ width: 18, height: 18 }}
                //   source={require('./images/down-circle.png')} />,
                // closeIcon: <Image
                //   resizeMode="stretch"
                //   style={{ width: 18, height: 18 }}
                //   source={require('./images/right-circle.png')} />
              }
            }
          />

          {/* <Text style={styles.modalText}>{value}</Text> */}
          {value && (
            <View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Text>{t('Selected')}: {value}</Text>
                <TouchableOpacity onPress={() => { handleChangeInfo('CSC', value); onToggle(); }}>
                  <Text
                    style={{
                      backgroundColor: '#F9A34C',
                      padding: 10,
                      color: '#FFF',
                      fontSize: 15,
                      fontWeight: 800,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                    }}>
                    {t('Select')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AddModel;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainerinner: {
    width: '90%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 20,
    margin: 20,
  },
});
