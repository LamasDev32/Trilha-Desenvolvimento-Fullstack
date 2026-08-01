from pathlib import Path

paths = [
    Path("c:/Users/Felipe/Documents/Github/Trilha-Desenvolvimento-Fullstack/Aprofundando-HTML/Desafio2/home-hashtag.html"),
    Path("c:/Users/Felipe/Documents/Github/Trilha-Desenvolvimento-Fullstack/Aprofundando-HTML/Desafio2/home-hashtag.css")
]
replacements = {
    'item-lista-cabecalho': 'header-nav-item',
    'botao': 'button',
    'hero-botao': 'hero-button',
    'gratuito-link-lista': 'free-link-list',
    'gratuito-h3': 'free-subheading',
    'diferenciais-p': 'differential-paragraph',
    'diferenciais-h3-empresas': 'differential-business-heading',
    'diferenciais-h3': 'differential-subheading',
    'realce-semibold': 'highlight-semibold',
    'section_media': 'section-media',
    'section_blog': 'section-blog',
    'section_help': 'section-help',
    'section_short_course': 'section-short-course',
    'section_footer': 'section-footer',
    'rodape-titulo': 'footer-title',
    'rodape-subtitulo': 'footer-subtitle',
    'rodape-seg-subtitulo': 'footer-secondary-subtitle',
    'rodape-link': 'footer-link',
    'blog-postadoem': 'blog-posted-on',
    'blog-titulopost': 'blog-post-title',
    'blog-descricaopost': 'blog-post-description',
    'comoajudar-lista': 'help-list',
    'comoajudar-paragrafo': 'help-paragraph'
}

for path in paths:
    text = path.read_text(encoding='utf-8')
    for old, new in sorted(replacements.items(), key=lambda item: -len(item[0])):
        text = text.replace(old, new)
    path.write_text(text, encoding='utf-8')
print('Replacement completed')
