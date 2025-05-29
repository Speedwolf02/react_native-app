import { StyleSheet,Text,View} from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const Table_pg =() =>{
    return(
        <View style={{flex:1,padding:10,paddingInlineEnd:10}}>
            <Text style={{margin:30, marginLeft:140,fontWeight:"bold",fontSize:30}}>
                Data table
            </Text>
            <DataTable style={styles.table}>
                <DataTable.Header style={styles.row} >
                    <DataTable.Title style={styles.cell} >Name</DataTable.Title>
                    <DataTable.Title numeric  style={styles.cell} >Mark</DataTable.Title>
                    <DataTable.Title style={styles.cell} >class</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row style={styles.row}>
                   <DataTable.Cell  style={styles.cell}>saran</DataTable.Cell>
                    <DataTable.Cell numeric  style={styles.cell}>90</DataTable.Cell> 
                    <DataTable.Cell style={styles.cell} >Bsc</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                   <DataTable.Cell  style={styles.cell}>sanjay</DataTable.Cell>
                    <DataTable.Cell  style={styles.cell} numeric >70</DataTable.Cell> 
                    <DataTable.Cell style={styles.cell} >Bsc</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                   <DataTable.Cell  style={styles.cell}>bala</DataTable.Cell>
                    <DataTable.Cell  style={styles.cell} numeric >80</DataTable.Cell>
                    <DataTable.Cell style={styles.cell} >Bsc</DataTable.Cell> 
                </DataTable.Row>
                <DataTable.Row style={styles.row}>
                   <DataTable.Cell  style={styles.cell}>sam</DataTable.Cell>
                    <DataTable.Cell  style={styles.cell} numeric >75</DataTable.Cell> 
                    <DataTable.Cell style={styles.cell} >Bsc</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  cell: {
    borderEndWidth:1,
    
    borderColor: 'black',
    paddingVertical: 9,
    paddingInlineEnd:40,
    paddingInlineStart:40
  },
  numeric: {
    borderRightWidth: 0, 
  },
});
export default Table_pg;