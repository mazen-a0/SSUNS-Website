import Foundation
import PDFKit

let path = "/Users/mazenasali/Downloads/2026 Land Acknowledgement.pdf"
let url = URL(fileURLWithPath: path)
if let doc = PDFDocument(url: url) {
  for i in 0..<doc.pageCount {
    if let page = doc.page(at: i), let text = page.string {
      print(text)
    }
  }
}
