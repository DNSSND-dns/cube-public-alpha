# CUBE — Public Alpha

[Сайт](https://dnssnd-dns.github.io/cube-public-alpha/) · [Скачать игру](https://github.com/DNSSND-dns/cube-public-alpha/releases/latest)

В репозитории только сайт и скриншоты. Готовые сборки хранятся в GitHub Releases.

## Обновление сборок

Соберите игру и замените три ZIP в существующем релизе, сохранив имена:

- `CUBE_Windows_x64.zip`
- `CUBE_Linux_Fedora_x64.zip`
- `CUBE_macOS_Universal.zip`

Из локальной папки `сайт` выполните:

```bash
gh release upload alpha-2026-11-21 ../builds/CUBE_Windows_x64.zip ../builds/CUBE_Linux_Fedora_x64.zip ../builds/CUBE_macOS_Universal.zip ../builds/BUILD_INFO.json ../builds/SHA256SUMS --repo DNSSND-dns/cube-public-alpha --clobber
```

После успешной загрузки сайт скачивает новые сборки по прежним ссылкам. Коммитить ZIP, менять файлы сайта или заново настраивать Pages не требуется.

Альтернатива: Releases → Edit текущего релиза → удалить старые ZIP-вложения → прикрепить новые с теми же именами → Update release. Не удаляйте сам релиз.

Условия использования: [LICENSE](LICENSE). Проверка загрузок: [VERIFYING_BUILDS.md](VERIFYING_BUILDS.md).
При публикации новых сборок также приложите соответствующие `SHA256SUMS` и `BUILD_INFO.json`. Они должны относиться к тому же набору ZIP.
