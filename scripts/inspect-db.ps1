$data = Get-Content 'src/data/db.json' -Raw | ConvertFrom-Json
Write-Host "=== COURSES ==="
foreach ($c in $data.courses) {
    Write-Host "Slug: $($c.slug) | Title: $($c.title)"
}
Write-Host "`n=== PAGES ==="
foreach ($p in $data.pages) {
    Write-Host "Slug: $($p.slug) | Title: $($p.title) | Published: $($p.isPublished)"
}
Write-Host "`n=== BLOGS ==="
foreach ($b in $data.blogs) {
    Write-Host "Slug: $($b.slug) | Title: $($b.title) | Published: $($b.isPublished)"
}
