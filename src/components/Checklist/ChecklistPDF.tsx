import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { ChecklistConfig } from './types';

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 35,
    fontFamily: 'Helvetica',
  },
  headerContainer: {
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#2563eb',
  },
  logo: {
    width: 100,
    height: 25,
    marginBottom: 6,
  },
  logoText: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: '#2563eb',
    marginBottom: 6,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  description: {
    fontSize: 8,
    color: '#64748b',
    lineHeight: 1.2,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    marginBottom: 4,
    marginTop: 8,
    backgroundColor: '#f1f5f9',
    padding: 4,
  },
  itemRow: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 3,
  },
  checkbox: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#94a3b8',
    marginRight: 4,
    marginTop: 1,
    flexShrink: 0,
  },
  checkedBox: {
    width: 8,
    height: 8,
    backgroundColor: '#2563eb',
    marginRight: 4,
    marginTop: 1,
    flexShrink: 0,
  },
  itemText: {
    fontSize: 8,
    color: '#334155',
    lineHeight: 1.2,
  },
  checkedText: {
    fontSize: 8,
    color: '#94a3b8',
    lineHeight: 1.2,
  },
  subItemRow: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 18,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 35,
    right: 35,
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#e2e8f0',
    paddingTop: 5,
  },
  footerText: {
    fontSize: 7,
    color: '#2563eb',
    fontFamily: 'Helvetica-Bold',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 6,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#94a3b8',
  },
});

interface ChecklistPDFProps {
  config: ChecklistConfig;
}

export const ChecklistPDF = ({ config }: ChecklistPDFProps) => {
  // Use absolute URL for logo
  const logoUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/logomarsstein.png`
    : 'https://marsstein.ai/logomarsstein.png';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header on first page only */}
        <View style={styles.headerContainer}>
          <Image
            src={logoUrl}
            style={styles.logo}
          />
          <Text style={styles.title}>{config.title}</Text>
          {config.description && (
            <Text style={styles.description}>{config.description}</Text>
          )}
        </View>

        {/* Sections */}
        {config.sections.map((section, sectionIdx) => (
          <View key={sectionIdx}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIdx) => (
              <View key={item.id}>
                <View style={styles.itemRow}>
                  <View style={item.checked ? styles.checkedBox : styles.checkbox} />
                  <Text style={item.checked ? styles.checkedText : styles.itemText}>
                    {item.text}
                  </Text>
                </View>
                {item.subItems?.map((subItem, subIdx) => (
                  <View key={subItem.id} style={styles.subItemRow}>
                    <View style={subItem.checked ? styles.checkedBox : styles.checkbox} />
                    <Text style={subItem.checked ? styles.checkedText : styles.itemText}>
                      {subItem.text}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}

        {/* Footer */}
        <View style={styles.footerContainer} fixed>
          <Text style={styles.footerText}>marsstein.ai</Text>
        </View>

        {/* Page Numbers */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `Seite ${pageNumber} von ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};
