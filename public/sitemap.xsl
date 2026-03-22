<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap — davesonntag.com</title>
        <meta name="robots" content="noindex"/>
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; max-width: 800px; margin: 40px auto; padding: 0 20px; }
          h1 { font-size: 1.5rem; margin-bottom: .5rem; }
          p { color: #666; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; }
          th, td { text-align: left; padding: 8px 12px; border-bottom: 1px solid #eee; }
          th { background: #f5f5f5; font-size: .85rem; text-transform: uppercase; letter-spacing: .05em; }
          td a { color: #1a0dab; text-decoration: none; }
          td a:hover { text-decoration: underline; }
          td { font-size: .9rem; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
