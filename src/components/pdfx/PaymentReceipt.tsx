import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import { PageHeader } from './page-header/pdfx-page-header';
import { PageFooter } from './page-footer/pdfx-page-footer';
import { Section } from './section/pdfx-section';
import { Heading } from './heading/pdfx-heading';
import { Text } from './text/pdfx-text';
import { DataTable } from './data-table/pdfx-data-table';
import { Divider } from './divider/pdfx-divider';

interface PaymentReceiptProps {
  orderId?: string;
  paymentId?: string;
  amount?: string;
  currency?: string;
  status?: string;
  date?: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  summary: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export const PaymentReceipt = ({
  orderId,
  paymentId,
  amount,
  currency,
  status,
  date = new Date().toLocaleDateString(),
}: PaymentReceiptProps) => {
  const transactionData: Array<{ label: string; value: string }> = [
    { label: 'Order ID', value: orderId ?? 'N/A' },
    { label: 'Payment ID', value: paymentId ?? 'N/A' },
    { label: 'Status', value: status ?? 'Success' },
    { label: 'Date', value: date },
  ];

  const columns: Array<{
    key: 'label' | 'value';
    header: string;
    width: string;
    align?: 'left' | 'center' | 'right';
  }> = [
    { key: 'label', header: 'Description', width: '70%' },
    { key: 'value', header: 'Details', width: '30%', align: 'right' },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <PageHeader
          title="Payment Receipt"
          subtitle="Terracode Solutions"
          rightText={`Date: ${date}`}
          variant="simple"
        />

        <Section>
          <Heading level={3}>Transaction Details</Heading>
          <Text variant="base">Thank you for your payment. Below are the details of your transaction.</Text>
        </Section>

        <Section>
          <DataTable<{ label: string; value: string }>
            columns={columns}
            data={transactionData}
            variant="minimal"
          />
        </Section>

        <Divider />

        <Section style={styles.summary}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View style={{ width: '40%' }}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>Total Amount:</Text>
                <Text style={{ fontWeight: 'bold' }}>{currency ?? 'LKR'} {amount ?? '0.00'}</Text>
              </View>
            </View>
          </View>
        </Section>

        <Section>
          <Text variant="base" style={{ fontSize: 10, color: '#71717a' }}>
            This is a computer-generated receipt and does not require a signature.
            If you have any questions, please contact support@terracode.com.
          </Text>
        </Section>

        <PageFooter
          variant="simple"
          leftText="Terracode © 2026"
        />
      </Page>
    </Document>
  );
};
