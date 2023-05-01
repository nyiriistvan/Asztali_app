import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = ({ children }) => {
  return (
    <View style={styles.table}>{children}</View>
  );
};

const TableRow = ({ children }) => {
  return (
    <View style={styles.tableRow}>{children}</View>
  );
};

const TableCell = ({ children }) => {
  return (
    <View style={styles.tableCell}><Text>{children}</Text></View>
  );
};

const TableHeader = ({ children }) => {
  return (
    <View style={styles.tableHeader}>{children}</View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderBottomColor: '#ccc',
    margin:5,
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: '',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin:5,
  },
});

export { Table, TableRow, TableCell, TableHeader };