$data = Get-Content 'src/data/db.json' -Raw | ConvertFrom-Json
Write-Host "=== BLOG POSTS & CURRENT INTERNAL LINKS ==="
foreach ($b in $data.blogs) {
    $content = $b.content
    $links = [regex]::Matches($content, 'href="([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
    Write-Host "`nBlog Slug: $($b.slug)"
    Write-Host "Title: $($b.title)"
    Write-Host "Links found: $($links.Count)"
    foreach ($l in $links) {
        Write-Host "  -> $l"
    }
}
