import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 50,
    color: '#1a1a1a',
    fontSize: 10,
    fontFamily: 'Helvetica',
    position: 'relative',
  },

  // 🔥 WATERMARK
  watermark: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    transform: 'rotate(-45deg)',
    fontSize: 150,
    color: '#000000',
    opacity: 0.05,
    fontWeight: 'bold',
    zIndex: 0,
    width: '100%',
    textAlign: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 20,
  },

  logo: {
    width: 80,
  },

  headerRight: {
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 28,
    color: '#1a1a1a',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },

  invoiceNumber: {
    fontSize: 11,
    color: '#FDA10A',
    fontWeight: 'bold',
  },

  billToSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  sectionTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#999999',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  billToBox: {
    width: '50%',
  },

  detailsBox: {
    width: '40%',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 2,
  },

  infoLabel: {
    color: '#666666',
    fontSize: 9,
  },

  infoValue: {
    fontWeight: 'bold',
    color: '#1a1a1a',
    fontSize: 9,
  },

  // Table
  table: {
    marginTop: 10,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
    height: 30,
  },

  tableHeaderText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#666666',
    textTransform: 'uppercase',
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eeeeee',
    alignItems: 'center',
    minHeight: 40,
  },

  colDescription: {
    width: '75%',
    paddingLeft: 10,
  },

  colAmount: {
    width: '25%',
    textAlign: 'right',
    paddingRight: 10,
  },

  itemTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 2,
  },

  // Summary
  summaryContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  summaryBox: {
    width: '40%',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
    marginTop: 10,
  },

  totalLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  totalValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },

  footer: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 20,
    textAlign: 'center',
    color: '#999999',
    fontSize: 8,
  },

  companyLine: {
    color: '#666666',
    fontSize: 9,
    marginBottom: 4,
  },
});

interface PaymentReceiptProps {
  orderId?: string;
  paymentId?: string;
  amount?: string;
  currency?: string;
  customerName?: string;
  customerEmail?: string;
  companyName?: string;
  packageName?: string;
  discountCode?: string;
  note?: string;
}

export const PaymentReceipt = ({
  orderId,
  paymentId,
  amount,
  currency,
  customerName,
  customerEmail,
  companyName,
  packageName,
  discountCode,
  note,
}: PaymentReceiptProps) => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Document title={`Invoice - ${orderId}`}>
      <Page size="A4" style={styles.page}>

        {/* 🔥 WATERMARK */}
        <Text style={styles.watermark}>PAID</Text>

        {/* Header */}
        <View style={styles.header}>
          <Image src="/logo.png" style={styles.logo} />
          <View style={styles.headerRight}>
            <Text style={styles.title}>INVOICE</Text>
            <Text style={styles.invoiceNumber}>
              NO: {orderId ?? '—'}
            </Text>
          </View>
        </View>

        {/* Bill To */}
        <View style={styles.billToSection}>
          <View style={styles.billToBox}>
            <Text style={styles.sectionTitle}>Bill To</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 11 }}>
              {customerName ?? 'Valued Customer'}
            </Text>
            {companyName && <Text>{companyName}</Text>}
            <Text>{customerEmail ?? '—'}</Text>
          </View>

          <View style={styles.detailsBox}>
            <Text style={styles.sectionTitle}>Invoice Details</Text>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoValue}>{date}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Order ID</Text>
              <Text style={styles.infoValue}>{orderId ?? '—'}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Transaction</Text>
              <Text style={styles.infoValue}>{paymentId ?? '—'}</Text>
            </View>
          </View>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.colDescription, styles.tableHeaderText]}>
              Description
            </Text>
            <Text style={[styles.colAmount, styles.tableHeaderText]}>
              Amount
            </Text>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.colDescription}>
              <Text style={styles.itemTitle}>
                {packageName ?? 'Service Package'}
              </Text>
              <Text>Standard digital service delivery</Text>
            </View>
            <Text style={styles.colAmount}>
              {currency ?? 'LKR'} {Number(amount).toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.summaryContainer}>
          <View />
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.infoLabel}>Subtotal</Text>
              <Text style={styles.infoValue}>
                {currency ?? 'LKR'} {Number(amount).toLocaleString()}
              </Text>
            </View>

            {discountCode && (
              <View style={styles.summaryRow}>
                <Text style={styles.infoLabel}>Discount</Text>
                <Text style={{ color: '#22c55e' }}>
                  -{currency ?? 'LKR'} 0.00
                </Text>
              </View>
            )}

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                {currency ?? 'LKR'} {Number(amount).toLocaleString()}
              </Text>
            </View>
          </View>
        </View>

        {/* Notes */}
        {note && (
          <View style={{ marginTop: 40 }}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text>{note}</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.companyLine}>
            Terracode Pvt Ltd • contact@terracodev.com • www.terracode.lk
          </Text>
          <Text>
            This is a computer-generated document. No signature required.
          </Text>
        </View>

      </Page>
    </Document>
  );
};