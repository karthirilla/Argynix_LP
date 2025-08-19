
import { FileText, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents & Resources | Argynix",
  description: "Access and download official documents from Argynix, including product catalogs, technical guides, API documentation, and our Service Level Agreement (SLA).",
};

const documents = [
  {
    title: 'Product Catalog 2024',
    description: 'The complete catalog of our latest products and solutions.',
    date: '2024-07-15',
    fileType: 'PDF',
    fileSize: '5.8 MB',
  },
  {
    title: 'IoT Integration Guide',
    description: 'A technical guide for integrating our IoT devices with your existing systems.',
    date: '2024-06-28',
    fileType: 'PDF',
    fileSize: '2.1 MB',
  },
  {
    title: 'API Documentation',
    description: 'Comprehensive documentation for our public APIs.',
    date: '2024-07-01',
    fileType: 'Online',
    fileSize: 'N/A',
  },
  {
    title: 'Service Level Agreement (SLA)',
    description: 'Our commitment to service quality and uptime.',
    date: '2024-05-20',
    fileType: 'DOCX',
    fileSize: '780 KB',
  },
];

export default function DocumentsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Documents</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Access our official documents, guides, and resources.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-8">
            {documents.map((doc, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{doc.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {doc.fileType} &middot; {doc.fileSize} &middot; Last updated: {doc.date}
                      </p>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{doc.description}</p>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
