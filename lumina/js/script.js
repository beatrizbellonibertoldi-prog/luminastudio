'use strict';

const CFG = {
  wa: '5517996464174',
  ig: 'https://instagram.com/seuperfil',
  fb: '',
  mail: 'lumina.contatto@gmail.com',
  shopee: {
    store: '',
    produtos: {}
  }
};

const STORAGE = {
  sess: 'sess',
  users: 'users',
  cart: 'cart_lumina_v2'
};

const CATEGORIAS = [
  'Todos',
  'Cadernos',
  'Canetas e Lápis',
  'Planners',
  'Adesivos',
  'Papéis',
  'Design'
];

const PRODUTOS = [
  {
    id: 1,
    nome: 'Caderno Brochura 96 folhas',
    tipo: 'Cadernos',
    preco: 24.9,
    cor: '#2a1d4d',
    desc: 'Capa dura, folhas pautadas de 90 g.',
    descLonga: 'Caderno brochura com capa dura resistente e 96 folhas pautadas em papel de 90 g. Ideal para anotações diárias, estudos e reuniões. Costura reforçada que permite abrir 180° sem soltar as folhas.',
    imagens: ['img/produtos/cadernobrochura96folhas.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'nome', label: 'Nome ou texto na capa', tipo: 'text', max: 40, placeholder: 'Ex.: Maria Silva', obrigatorio: true },
      { id: 'cor', label: 'Cor da capa', tipo: 'select', opcoes: ['Roxo neon', 'Ciano', 'Rosa', 'Preto', 'Branco'], obrigatorio: true },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 200, placeholder: 'Detalhes extras (opcional)' }
    ],
    prazo: '3 a 5 dias úteis após confirmação da arte',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 2,
    nome: 'Caderno Pontilhado A5',
    tipo: 'Cadernos',
    preco: 39.9,
    cor: '#3b2a1a',
    desc: 'Ideal para bullet journal e lettering.',
    descLonga: 'Caderno A5 com folhas pontilhadas de 100 g, perfeitas para bullet journal, lettering e planejamento criativo. Capa flexível, miolo costurado e marcador de página em fita.',
    imagens: ['img/produtos/cadernopontilhadoa5.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'nome', label: 'Nome na capa', tipo: 'text', max: 40, obrigatorio: true },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 200 }
    ],
    prazo: '3 a 5 dias úteis',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 3,
    nome: 'Kit 6 Canetas Gel',
    tipo: 'Canetas e Lápis',
    preco: 19.9,
    cor: '#2a1a3d',
    desc: 'Traço macio, cores vivas.',
    descLonga: 'Kit com 6 canetas gel de cores vibrantes: preto, azul, roxo, rosa, verde e laranja. Traço macio de 0,7 mm, secagem rápida e escrita uniforme. Ideal para anotações, lettering e artes.',
    imagens: ['img/produtos/kit6canetasgel.jpg'],
    personalizavel: false,
    prazo: 'Pronta entrega',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 4,
    nome: 'Kit Lápis de Cor 24 cores',
    tipo: 'Canetas e Lápis',
    preco: 34.9,
    cor: '#1a2e1a',
    desc: 'Pigmento intenso e ponta resistente.',
    descLonga: 'Conjunto de 24 lápis de cor com pigmento intenso e ponta resistente. Boa cobertura, mistura suave e excelente fixação no papel. Acompanha estojo de lata.',
    imagens: ['img/produtos/kitlapis24cores.jpg'],
    personalizavel: false,
    prazo: 'Pronta entrega',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 5,
    nome: 'Planner Semanal 2027',
    tipo: 'Planners',
    preco: 49.9,
    cor: '#2a1d4d',
    desc: 'Visão semanal, metas e hábitos.',
    descLonga: 'Planner anual com visão semanal, espaço para metas, hábitos e revisão mensal. Capa dura com acabamento soft touch, miolo em papel 90 g e wire-o dourado. Perfeito para organizar rotina pessoal e profissional.',
    imagens: ['img/produtos/plannersemanal2027.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'nome', label: 'Nome na capa', tipo: 'text', max: 40, obrigatorio: true },
      { id: 'cor', label: 'Cor da capa', tipo: 'select', opcoes: ['Roxo neon', 'Ciano', 'Rosa', 'Preto'], obrigatorio: true },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 200 }
    ],
    prazo: '5 a 7 dias úteis (personalizado)',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 6,
    nome: 'Planner de Estudos',
    tipo: 'Planners',
    preco: 44.9,
    cor: '#3b2a1a',
    desc: 'Cronograma, revisão e notas.',
    descLonga: 'Planner focado em estudos, com cronograma semanal, controle de revisões, anotações por matéria e metas de aprendizado. Ajuda a manter consistência e enxergar progresso ao longo do semestre.',
    imagens: ['img/produtos/plannerdeestudos.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'nome', label: 'Nome na capa', tipo: 'text', max: 40, obrigatorio: true },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 200 }
    ],
    prazo: '5 a 7 dias úteis (personalizado)',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 7,
    nome: 'Cartela de Adesivos Fofos',
    tipo: 'Adesivos',
    preco: 9.9,
    cor: '#2a1a3d',
    desc: 'Vinil resistente, 40 adesivos.',
    descLonga: 'Cartela com 40 adesivos em vinil resistente, com acabamento fosco. Perfeitos para decorar planners, cadernos, notebooks e presentes. Cores vibrantes e alta durabilidade.',
    imagens: ['img/produtos/cartelaadesivosfofos.jpg'],
    personalizavel: false,
    prazo: 'Pronta entrega',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 8,
    nome: 'Post-its Coloridos',
    tipo: 'Adesivos',
    preco: 12.9,
    cor: '#1a2e1a',
    desc: 'Bloco com 5 cores, 250 folhas.',
    descLonga: 'Bloco de post-its com 5 cores neon e 250 folhas no total. Cola removível de alta fixação, ideal para marcar páginas, anotar recados e organizar tarefas.',
    imagens: ['img/produtos/postitscoloridos.jpg'],
    personalizavel: false,
    prazo: 'Pronta entrega',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 9,
    nome: 'Papel Sulfite Colorido A4',
    tipo: 'Papéis',
    preco: 29.9,
    cor: '#2a1d4d',
    desc: 'Pacote com 100 folhas, 75 g.',
    descLonga: 'Pacote com 100 folhas A4 coloridas de 75 g, em cores sortidas. Ideal para impressão, artesanato, scrapbook, convites e atividades escolares.',
    imagens: ['img/produtos/papelsulfitecoloridoa4.jpg'],
    personalizavel: false,
    prazo: 'Pronta entrega',
    entrega: 'Correios e transportadora · Retirada em mãos',
    shopeeId: null
  },
  {
    id: 10,
    nome: 'Criação de Logotipo',
    tipo: 'Design',
    preco: 250,
    cor: '#3b2a1a',
    desc: 'Logo exclusivo com 2 propostas e arquivos finais.',
    descLonga: 'Serviço de criação de logotipo exclusivo, com 2 propostas iniciais, até 2 rodadas de ajustes e entrega dos arquivos finais em PNG, JPG, PDF e vetor (SVG/AI). Inclui manual rápido de uso.',
    imagens: ['img/produtos/criacaodelogotipo.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'marca', label: 'Nome da marca/negócio', tipo: 'text', max: 60, obrigatorio: true },
      { id: 'segmento', label: 'Segmento / ramo de atuação', tipo: 'text', max: 80, obrigatorio: true },
      { id: 'estilo', label: 'Estilo desejado', tipo: 'select', opcoes: ['Minimalista', 'Moderno', 'Clássico', 'Divertido', 'Elegante'], obrigatorio: true },
      { id: 'referencias', label: 'Referências e cores preferidas', tipo: 'textarea', max: 300, placeholder: 'Links, cores, inspirações…' },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 300 }
    ],
    prazo: '7 a 10 dias úteis após briefing',
    entrega: 'Arquivos digitais enviados por e-mail',
    shopeeId: null
  },
  {
    id: 11,
    nome: 'Identidade Visual Completa',
    tipo: 'Design',
    preco: 690,
    cor: '#2a1a3d',
    desc: 'Logo, paleta, tipografia e manual de marca.',
    descLonga: 'Pacote completo de identidade visual: logotipo, variações, paleta de cores, tipografia, elementos gráficos, aplicações básicas e manual de marca em PDF. Ideal para marcas que estão começando ou reposicionando.',
    imagens: ['img/produtos/identidadevisualcompleta.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'marca', label: 'Nome da marca/negócio', tipo: 'text', max: 60, obrigatorio: true },
      { id: 'segmento', label: 'Segmento / ramo', tipo: 'text', max: 80, obrigatorio: true },
      { id: 'publico', label: 'Público-alvo', tipo: 'text', max: 120 },
      { id: 'referencias', label: 'Referências visuais', tipo: 'textarea', max: 400 },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 400 }
    ],
    prazo: '15 a 20 dias úteis após briefing',
    entrega: 'Arquivos digitais enviados por e-mail',
    shopeeId: null
  },
  {
    id: 12,
    nome: 'Convite Digital Personalizado',
    tipo: 'Design',
    preco: 60,
    cor: '#1a2e1a',
    desc: 'Arte pronta para WhatsApp e Instagram.',
    descLonga: 'Convite digital personalizado, entregue em PNG e JPG nas medidas ideais para WhatsApp e Instagram. Inclui 1 rodada de ajustes. Ideal para aniversários, casamentos, chás e eventos.',
    imagens: ['img/produtos/convitedigitalpersonalizado.jpg'],
    personalizavel: true,
    persCampos: [
      { id: 'evento', label: 'Tipo de evento', tipo: 'text', max: 60, obrigatorio: true },
      { id: 'data', label: 'Data do evento', tipo: 'text', max: 30, placeholder: 'Ex.: 12/09/2026' },
      { id: 'textos', label: 'Textos do convite', tipo: 'textarea', max: 400, obrigatorio: true },
      { id: 'cores', label: 'Cores preferidas', tipo: 'text', max: 80 },
      { id: 'obs', label: 'Observações', tipo: 'textarea', max: 300 }
    ],
    prazo: '3 a 5 dias úteis',
    entrega: 'Arquivos digitais enviados por WhatsApp/e-mail',
    shopeeId: null
  }
];

const $ = (s, ctx) => (ctx || document).querySelector(s);
const $$ = (s, ctx) => Array.from((ctx || document).querySelectorAll(s));

const brl = n => Number(n).toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

const ler = (k, v) => {
  try {
    const raw = localStorage.getItem(k);
    return raw ? JSON.parse(raw) : v;
  } catch {
    return v;
  }
};

const salvar = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (err) {
    console.warn('Não foi possível salvar', k, err);
  }
};

const sessao = () => ler(STORAGE.sess, null);

const escapeHtml = str =>
  String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const waLink = txt => `https://wa.me/${CFG.wa}?text=${encodeURIComponent(txt)}`;

const toast = (msg) => {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove('show'), 2400);
};

const setLinksContato = (root = document) => {
  const mapa = {
    wa: CFG.wa ? `https://wa.me/${CFG.wa}` : '',
    ig: CFG.ig || '',
    fb: CFG.fb || '',
    mail: CFG.mail ? `mailto:${CFG.mail}` : ''
  };
  $$('[data-l]', root).forEach(a => {
    const dest = mapa[a.dataset.l];
    if (!dest) {
      a.removeAttribute('href');
      return;
    }
    a.href = dest;
    if (a.dataset.l !== 'mail') {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else {
      a.removeAttribute('target');
      a.removeAttribute('rel');
    }
  });
};

const hashPers = pers => {
  if (!pers || !Object.keys(pers).length) return '';
  const entries = Object.entries(pers)
    .filter(([, v]) => String(v || '').trim() !== '')
    .sort(([a], [b]) => a.localeCompare(b));
  const str = entries.map(([k, v]) => `${k}=${String(v).trim()}`).join('|');
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
};

const chaveItem = (produtoId, pers) => {
  const h = hashPers(pers);
  return h ? `${produtoId}::${h}` : `${produtoId}`;
};

const labelPers = (produto, campoId) => {
  const c = (produto.persCampos || []).find(x => x.id === campoId);
  return c ? c.label : campoId;
};

const Carrinho = {
  get() {
    const raw = ler(STORAGE.cart, {});
    const out = {};
    Object.entries(raw || {}).forEach(([k, item]) => {
      if (!item || typeof item !== 'object') return;
      if (typeof item.qtd !== 'number' || item.qtd <= 0) return;
      out[k] = item;
    });
    return out;
  },
  save(c) {
    salvar(STORAGE.cart, c);
  },
  add(produtoId, qtd, pers) {
    const c = this.get();
    const key = chaveItem(produtoId, pers);
    const existente = c[key];
    if (existente) {
      existente.qtd += qtd;
    } else {
      c[key] = { produtoId, qtd, pers: pers || null };
    }
    this.save(c);
    return key;
  },
  setQtd(key, qtd) {
    const c = this.get();
    if (!c[key]) return;
    if (qtd <= 0) delete c[key];
    else c[key].qtd = qtd;
    this.save(c);
  },
  remove(key) {
    const c = this.get();
    delete c[key];
    this.save(c);
  },
  linhas() {
    return Object.entries(this.get()).map(([key, item]) => {
      const p = PRODUTOS.find(x => x.id === item.produtoId);
      return p ? { key, produto: p, qtd: item.qtd, pers: item.pers } : null;
    }).filter(Boolean);
  },
  totalQtd() {
    return this.linhas().reduce((s, l) => s + l.qtd, 0);
  },
  totalValor() {
    return this.linhas().reduce((s, l) => s + l.produto.preco * l.qtd, 0);
  }
};

function initAuth() {
  const form = $('#authForm');
  if (!form) return;

  if (sessao() && $('#tabEntrar')) {
    window.location.replace('index.html');
    return;
  }

  let modoCriar = false;

  const aplicarModo = (criar) => {
    modoCriar = criar;

    const tabE = $('#tabEntrar');
    const tabC = $('#tabCriar');
    if (tabE) {
      tabE.classList.toggle('on', !criar);
      tabE.setAttribute('aria-selected', String(!criar));
    }
    if (tabC) {
      tabC.classList.toggle('on', criar);
      tabC.setAttribute('aria-selected', String(criar));
    }

    const nomeWrap = $('#nomeWrap');
    const aNome = $('#aNome');
    if (nomeWrap) nomeWrap.hidden = !criar;
    if (aNome) aNome.required = criar;

    const title = $('#authTitle');
    const sub = $('#authSub');
    if (title) title.textContent = criar ? 'Criar conta' : 'Entrar na conta';
    if (sub) sub.textContent = criar
      ? 'Cadastre-se para montar seu carrinho e pedir pelo WhatsApp.'
      : 'Bem-vindo de volta à Lumina Studio.';

    const btn = $('#aBtn');
    if (btn) btn.textContent = criar ? 'Criar conta' : 'Entrar';

    const msg = $('#aMsg');
    if (msg) msg.textContent = '';
  };

  const tabE = $('#tabEntrar');
  const tabC = $('#tabCriar');
  if (tabE) tabE.onclick = () => aplicarModo(false);
  if (tabC) tabC.onclick = () => aplicarModo(true);

  const visitante = $('#visitante');
  if (visitante) {
    visitante.onclick = () => {
      salvar(STORAGE.sess, { nome: 'Visitante', email: null });
      window.location.href = 'index.html';
    };
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    const msg = $('#aMsg');
    if (msg) msg.textContent = '';

    const email = ($('#aEmail')?.value || '').trim().toLowerCase();
    const senha = $('#aSenha')?.value || '';

    if (!email || !senha) {
      if (msg) msg.textContent = 'Preencha o e-mail e a senha.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (msg) msg.textContent = 'Digite um e-mail válido.';
      return;
    }
    if (senha.length < 6) {
      if (msg) msg.textContent = 'A senha precisa ter no mínimo 6 caracteres.';
      return;
    }

    const users = ler(STORAGE.users, {});

    if (modoCriar) {
      const nome = ($('#aNome')?.value || '').trim();
      if (nome.length < 2) {
        if (msg) msg.textContent = 'Digite seu nome (mínimo 2 caracteres).';
        return;
      }
      if (users[email]) {
        if (msg) msg.textContent = 'Este e-mail já tem conta. Use a aba Entrar.';
        return;
      }

      users[email] = { nome, senha: btoa(senha), criado: Date.now() };
      salvar(STORAGE.users, users);
      salvar(STORAGE.sess, { nome, email });
      window.location.href = 'index.html';
      return;
    }

    if (!users[email] || users[email].senha !== btoa(senha)) {
      if (msg) msg.textContent = 'E-mail ou senha incorretos. Confira os dados ou crie uma conta.';
      return;
    }

    salvar(STORAGE.sess, { nome: users[email].nome, email });
    window.location.href = 'index.html';
  };

  aplicarModo(false);
}

const Overlay = (() => {
  let timer = null;
  return {
    mostrar() {
      const ov = $('#overlay');
      if (!ov) return;
      clearTimeout(timer);
      ov.hidden = false;
      requestAnimationFrame(() => ov.classList.add('show'));
      document.body.style.overflow = 'hidden';
    },
    esconder(ms = 250) {
      const ov = $('#overlay');
      if (!ov) return;
      ov.classList.remove('show');
      clearTimeout(timer);
      timer = setTimeout(() => { ov.hidden = true; }, ms);
      document.body.style.overflow = '';
    }
  };
})();

function initDrawer() {
  const drawer = $('#drawer');
  const overlay = $('#overlay');
  const abrir = $('#abrirCarrinho');
  const fechar = $('#fecharCarrinho');
  const items = $('#items');
  const qtdEl = $('#qtd');
  const totalEl = $('#total');
  const finalizar = $('#finalizar');
  if (!drawer) return;

  const abrirDrawer = () => {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    Overlay.mostrar();
    render();
  };
  const fecharDrawer = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    Overlay.esconder(250);
  };

  if (abrir) abrir.onclick = abrirDrawer;
  if (fechar) fechar.onclick = fecharDrawer;
  if (overlay) overlay.onclick = () => {
    if (drawer.classList.contains('open')) fecharDrawer();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) fecharDrawer();
  });

  function render() {
    const linhas = Carrinho.linhas();
    if (qtdEl) qtdEl.textContent = String(Carrinho.totalQtd());
    if (totalEl) totalEl.textContent = brl(Carrinho.totalValor());

    if (!items) return;

    if (!linhas.length) {
      items.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.<br>Toque em um produto para adicionar.</p>';
      return;
    }

    items.innerHTML = linhas.map(l => {
      const persHtml = l.pers && Object.keys(l.pers).length
        ? `<div class="pers">${Object.entries(l.pers)
            .filter(([, v]) => String(v || '').trim() !== '')
            .map(([k, v]) => `<strong>${escapeHtml(labelPers(l.produto, k))}:</strong> ${escapeHtml(v)}`)
            .join('<br>')}</div>`
        : '';
      return `
        <div class="it" data-key="${escapeHtml(l.key)}">
          <div class="it-info">
            <strong>${escapeHtml(l.produto.nome)}</strong>
            <div class="preco-unit">${brl(l.produto.preco)} · un.</div>
            ${persHtml}
            <button class="it-remove" type="button" data-remove="${escapeHtml(l.key)}">Remover</button>
          </div>
          <div class="it-actions" role="group" aria-label="Quantidade">
            <button type="button" data-dec="${escapeHtml(l.key)}" aria-label="Diminuir">−</button>
            <span class="qt">${l.qtd}</span>
            <button type="button" data-inc="${escapeHtml(l.key)}" aria-label="Aumentar">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  if (items) {
    items.onclick = (e) => {
      const t = e.target;
      if (t.dataset.inc) {
        const key = t.dataset.inc;
        const linhas = Carrinho.linhas();
        const atual = linhas.find(l => l.key === key);
        if (atual) { Carrinho.setQtd(key, atual.qtd + 1); render(); }
      } else if (t.dataset.dec) {
        const key = t.dataset.dec;
        const linhas = Carrinho.linhas();
        const atual = linhas.find(l => l.key === key);
        if (atual) { Carrinho.setQtd(key, atual.qtd - 1); render(); }
      } else if (t.dataset.remove) {
        Carrinho.remove(t.dataset.remove);
        render();
        toast('Item removido');
      }
    };
  }

  if (finalizar) {
    finalizar.onclick = () => {
      if (!Carrinho.linhas().length) {
        toast('Adicione pelo menos um produto.');
        return;
      }
      fecharDrawer();
      if (window.LuminaCheckout && typeof window.LuminaCheckout.abrir === 'function') {
        window.LuminaCheckout.abrir();
      }
    };
  }

  window.refreshCartBadge = () => {
    if (qtdEl) qtdEl.textContent = String(Carrinho.totalQtd());
    if (totalEl) totalEl.textContent = brl(Carrinho.totalValor());
    if (drawer.classList.contains('open')) render();
  };

  render();
  window.refreshCartBadge();
}

function initHeader() {
  const s = sessao();
  const userEl = $('#user');
  if (userEl) {
    const nome = (s?.nome || '').split(' ')[0];
    userEl.textContent = nome ? `Olá, ${nome}` : '';
  }

  const sair = $('#sair');
  if (sair) {
    sair.onclick = () => {
      localStorage.removeItem(STORAGE.sess);
      window.location.href = 'login.html';
    };
  }

  const anoEl = $('#ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();
  const fMail = $('#fMail');
  if (fMail && CFG.mail) fMail.textContent = CFG.mail;

  const toggle = $('#menuToggle');
  const nav = $('#mainNav');
  if (toggle && nav) {
    toggle.onclick = () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    };
    $$('a', nav).forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  initShopee();
}

function initShopee() {
  const btn = $('#shopeeStoreBtn');
  const hint = $('#shopeeHint');
  const url = (CFG.shopee && CFG.shopee.store) || '';
  if (btn) {
    if (url) {
      btn.href = url;
      btn.hidden = false;
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
    } else {
      btn.hidden = true;
    }
  }
  if (hint) hint.hidden = !!url;
}

function initCatalogo() {
  const grid = $('#grid');
  const filtros = $('#filtros');
  const busca = $('#busca');
  const emptyMsg = $('#emptyMsg');
  if (!grid) return;

  let filtro = 'Todos';
  let termo = '';

  const normaliza = s => String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  function renderFiltros() {
    if (!filtros) return;
    filtros.innerHTML = CATEGORIAS.map(c => `
      <button type="button" role="tab"
        aria-selected="${c === filtro}"
        class="${c === filtro ? 'on' : ''}"
        data-t="${escapeHtml(c)}">${escapeHtml(c)}</button>
    `).join('');
  }

  function filtrar() {
    const t = normaliza(termo);
    return PRODUTOS.filter(p => {
      const okCat = filtro === 'Todos' || p.tipo === filtro;
      if (!okCat) return false;
      if (!t) return true;
      const alvo = normaliza(p.nome + ' ' + p.tipo + ' ' + p.desc);
      return alvo.includes(t);
    });
  }

  function renderGrid() {
    const lista = filtrar();
    if (emptyMsg) emptyMsg.hidden = lista.length > 0;

    if (!lista.length) {
      grid.innerHTML = '';
      return;
    }

    grid.innerHTML = lista.map(p => {
      const imgHtml = p.imagens && p.imagens.length
        ? `<img src="${escapeHtml(p.imagens[0])}" alt="${escapeHtml(p.nome)}" loading="lazy">`
        : p.emoji;
      return `
        <article class="card">
          <a class="card-link" href="produto.html?id=${p.id}"
             aria-label="Ver ${escapeHtml(p.nome)}"></a>
          <div class="img" style="--c:${escapeHtml(p.cor || '#2a1d4d')}">${imgHtml}</div>
          <div class="in">
            <small>${escapeHtml(p.tipo)}</small>
            <h3>${escapeHtml(p.nome)}</h3>
            <p>${escapeHtml(p.desc)}</p>
            <button class="preco" type="button" data-add="${p.id}">
              <span>${brl(p.preco)}</span>
              <span aria-hidden="true">Adicionar →</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  if (filtros) {
    filtros.onclick = (e) => {
      const t = e.target.dataset.t;
      if (!t) return;
      filtro = t;
      renderFiltros();
      renderGrid();
    };
  }

  if (busca) {
    let debounce;
    busca.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        termo = busca.value.trim();
        renderGrid();
      }, 150);
    });
  }

  grid.onclick = (e) => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const id = Number(btn.dataset.add);
    const p = PRODUTOS.find(x => x.id === id);
    if (!p) return;

    if (p.personalizavel && p.persCampos && p.persCampos.length) {
      window.location.href = `produto.html?id=${p.id}`;
      return;
    }

    Carrinho.add(p.id, 1, null);
    if (window.refreshCartBadge) window.refreshCartBadge();
    toast(`${p.nome} adicionado`);

    const drawer = $('#drawer');
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      Overlay.mostrar();
      if (typeof window.refreshCartBadge === 'function') window.refreshCartBadge();
    }
  };

  renderFiltros();
  renderGrid();
}

function initProduto() {
  const view = $('#produtoView');
  if (!view) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const p = PRODUTOS.find(x => x.id === id);

  const crumb = $('#crumbNome');
  const notFound = $('#notFound');
  const related = $('#relatedSection');
  const relatedGrid = $('#relatedGrid');

  if (!p) {
    if (notFound) notFound.hidden = false;
    view.innerHTML = '';
    view.hidden = true;
    if (crumb) crumb.textContent = 'Produto não encontrado';
    return;
  }

  document.title = `${p.nome} | Lumina Studio`;
  if (crumb) crumb.textContent = p.nome;

  const imgs = (p.imagens && p.imagens.length) ? p.imagens : [];
  const temGaleria = imgs.length > 1;

  const persCampos = p.personalizavel ? (p.persCampos || []) : [];

  const imgMain = imgs.length
    ? `<img src="${escapeHtml(imgs[0])}" alt="${escapeHtml(p.nome)}" id="imgMain">`
    : p.emoji;

  const thumbsHtml = temGaleria
    ? `<div class="prod-thumbs" role="group" aria-label="Miniaturas">
        ${imgs.map((src, i) => `
          <button type="button" class="${i === 0 ? 'on' : ''}" data-thumb="${i}" aria-label="Imagem ${i + 1}">
            <img src="${escapeHtml(src)}" alt="">
          </button>
        `).join('')}
      </div>`
    : '';

  const persHtml = persCampos.length ? `
    <div class="pers-box">
      <h3>Personalização</h3>
      ${persCampos.map(c => {
        const req = c.obrigatorio ? 'data-req="1"' : '';
        if (c.tipo === 'select') {
          return `
            <label class="field">
              <span>${escapeHtml(c.label)}${c.obrigatorio ? ' *' : ''}</span>
              <select data-pers="${escapeHtml(c.id)}" ${req}>
                <option value="">Escolha…</option>
                ${(c.opcoes || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('')}
              </select>
            </label>`;
        }
        if (c.tipo === 'textarea') {
          return `
            <label class="field">
              <span>${escapeHtml(c.label)}${c.obrigatorio ? ' *' : ''}</span>
              <textarea data-pers="${escapeHtml(c.id)}" maxlength="${c.max || 300}"
                placeholder="${escapeHtml(c.placeholder || '')}" ${req}></textarea>
            </label>`;
        }
        return `
          <label class="field">
            <span>${escapeHtml(c.label)}${c.obrigatorio ? ' *' : ''}</span>
            <input type="text" data-pers="${escapeHtml(c.id)}" maxlength="${c.max || 80}"
              placeholder="${escapeHtml(c.placeholder || '')}" ${req}>
          </label>`;
      }).join('')}
    </div>
  ` : '';

  const shopeeUrl = (CFG.shopee && CFG.shopee.produtos && CFG.shopee.produtos[p.id]) || '';
  const shopeeBtn = shopeeUrl ? `
    <a class="btn shopee-btn" href="${escapeHtml(shopeeUrl)}" target="_blank" rel="noopener noreferrer">
      Ver na Shopee
    </a>
  ` : '';

  const metaHtml = `
    <div class="prod-meta">
      ${p.prazo ? `<div class="row"><strong>Prazo</strong><span>${escapeHtml(p.prazo)}</span></div>` : ''}
      ${p.entrega ? `<div class="row"><strong>Entrega</strong><span>${escapeHtml(p.entrega)}</span></div>` : ''}
      <div class="row"><strong>Categoria</strong><span>${escapeHtml(p.tipo)}</span></div>
    </div>
  `;

  view.innerHTML = `
    <div class="prod-gallery">
      <div class="prod-main-img" style="--c:${escapeHtml(p.cor || '#2a1d4d')}" id="imgWrap">
        ${imgMain}
      </div>
      ${thumbsHtml}
    </div>

    <div class="prod-info">
      <span class="prod-cat">${escapeHtml(p.tipo)}</span>
      <h1>${escapeHtml(p.nome)}</h1>
      <div class="prod-price">${brl(p.preco)}</div>
      <p class="prod-desc">${escapeHtml(p.descLonga || p.desc)}</p>

      ${metaHtml}
      ${persHtml}

      <div class="prod-qty" role="group" aria-label="Quantidade">
        <button type="button" id="qDec" aria-label="Diminuir">−</button>
        <input type="number" id="qInput" value="1" min="1" max="99" aria-label="Quantidade">
        <button type="button" id="qInc" aria-label="Aumentar">+</button>
      </div>

      <div class="prod-actions">
        <button class="btn" id="addCart" type="button">Adicionar ao carrinho</button>
        <button class="btn alt" id="comprarWa" type="button">Pedir direto no WhatsApp</button>
        ${shopeeBtn}
      </div>
    </div>
  `;

  if (temGaleria) {
    const wrap = $('#imgWrap');
    const thumbs = $$('.prod-thumbs button', view);
    thumbs.forEach(btn => {
      btn.addEventListener('click', () => {
        const i = Number(btn.dataset.thumb);
        thumbs.forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        if (wrap) {
          wrap.innerHTML = `<img src="${escapeHtml(imgs[i])}" alt="${escapeHtml(p.nome)}" id="imgMain">`;
        }
      });
    });
  }

  const qInput = $('#qInput');
  const qDec = $('#qDec');
  const qInc = $('#qInc');
  const getQtd = () => {
    const n = Number(qInput?.value || 1);
    return Math.max(1, Math.min(99, Number.isFinite(n) ? n : 1));
  };
  if (qDec) qDec.onclick = () => { if (qInput) qInput.value = String(getQtd() - 1 < 1 ? 1 : getQtd() - 1); };
  if (qInc) qInc.onclick = () => { if (qInput) qInput.value = String(getQtd() + 1 > 99 ? 99 : getQtd() + 1); };
  if (qInput) qInput.onchange = () => { qInput.value = String(getQtd()); };

  function coletarPers() {
    const pers = {};
    let erro = null;
    persCampos.forEach(c => {
      const el = view.querySelector(`[data-pers="${c.id}"]`);
      if (!el) return;
      const v = String(el.value || '').trim();
      if (c.obrigatorio && !v) {
        erro = `Preencha o campo: ${c.label}`;
      }
      if (v) pers[c.id] = v;
    });
    return { pers, erro };
  }

  const addBtn = $('#addCart');
  if (addBtn) {
    addBtn.onclick = () => {
      const { pers, erro } = coletarPers();
      if (erro) { toast(erro); return; }
      Carrinho.add(p.id, getQtd(), Object.keys(pers).length ? pers : null);
      if (window.refreshCartBadge) window.refreshCartBadge();
      toast(`${p.nome} adicionado`);
      const drawer = $('#drawer');
      if (drawer) {
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        Overlay.mostrar();
        if (typeof window.refreshCartBadge === 'function') window.refreshCartBadge();
      }
    };
  }

  const waBtn = $('#comprarWa');
  if (waBtn) {
    waBtn.onclick = () => {
      const { pers, erro } = coletarPers();
      if (erro) { toast(erro); return; }

      const qtd = getQtd();
      const subtotal = p.preco * qtd;
      const nome = sessao()?.nome || '';
      const persTxt = Object.keys(pers).length
        ? '\n*Personalização:*\n' + Object.entries(pers)
            .map(([k, v]) => `• ${labelPers(p, k)}: ${v}`).join('\n')
        : '';

      const txt = `Olá, Lumina Studio! Tenho interesse neste produto:

*${p.nome}*
Quantidade: ${qtd}
Preço unitário: ${brl(p.preco)}
Subtotal: ${brl(subtotal)}${persTxt}

${nome ? `Meu nome: ${nome}\n` : ''}Podem me ajudar a finalizar?`;

      window.open(waLink(txt), '_blank', 'noopener');
    };
  }

  if (related && relatedGrid) {
    const rel = PRODUTOS.filter(x => x.id !== p.id && x.tipo === p.tipo).slice(0, 3);
    const fallback = rel.length ? rel : PRODUTOS.filter(x => x.id !== p.id).slice(0, 3);
    if (fallback.length) {
      related.hidden = false;
      relatedGrid.innerHTML = fallback.map(r => `
        <article class="card">
          <a class="card-link" href="produto.html?id=${r.id}" aria-label="Ver ${escapeHtml(r.nome)}"></a>
          <div class="img" style="--c:${escapeHtml(r.cor || '#2a1d4d')}">
            ${r.imagens && r.imagens.length
              ? `<img src="${escapeHtml(r.imagens[0])}" alt="${escapeHtml(r.nome)}" loading="lazy">`
              : r.emoji}
          </div>
          <div class="in">
            <small>${escapeHtml(r.tipo)}</small>
            <h3>${escapeHtml(r.nome)}</h3>
            <p>${escapeHtml(r.desc)}</p>
            <a class="preco" href="produto.html?id=${r.id}">
              <span>${brl(r.preco)}</span>
              <span aria-hidden="true">Ver →</span>
            </a>
          </div>
        </article>
      `).join('');
    }
  }
}

const LuminaCheckout = (() => {
  let modal, overlay, body, totalEl, btnEnviar, btnFechar;

  function abrir() {
    if (!modal) return;
    renderResumo();
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('show'));
    Overlay.mostrar();
  }

  function fechar() {
    if (!modal) return;
    modal.classList.remove('show');
    setTimeout(() => { modal.hidden = true; }, 220);
    Overlay.esconder(220);
  }

  function renderResumo() {
    if (!body || !totalEl) return;
    const linhas = Carrinho.linhas();
    totalEl.textContent = brl(Carrinho.totalValor());

    const itensHtml = linhas.map(l => {
      const persTxt = l.pers && Object.keys(l.pers).length
        ? '<small>' + Object.entries(l.pers)
            .filter(([, v]) => String(v || '').trim() !== '')
            .map(([k, v]) => `${escapeHtml(labelPers(l.produto, k))}: ${escapeHtml(v)}`)
            .join(' · ') + '</small>'
        : '';
      return `
        <li>
          <span>
            <strong>${l.qtd}x ${escapeHtml(l.produto.nome)}</strong>
            ${persTxt}
          </span>
          <span>${brl(l.produto.preco * l.qtd)}</span>
        </li>
      `;
    }).join('');

    body.innerHTML = `
      <section>
        <h4>Resumo do pedido</h4>
        <ul class="review-list">${itensHtml}</ul>
      </section>

      <section>
        <h4>Como você quer receber?</h4>
        <div class="radio-row">
          <label><input type="radio" name="modalidade" value="entrega" checked> Entrega</label>
          <label><input type="radio" name="modalidade" value="retirada"> Retirada</label>
        </div>
      </section>

      <section id="enderecoSection">
        <h4>Endereço de entrega</h4>
        <div class="field">
          <span>Endereço (rua e número)</span>
          <input type="text" id="ckEndereco" placeholder="Rua, número, complemento">
        </div>
        <div class="form-2col">
          <div class="field">
            <span>Bairro</span>
            <input type="text" id="ckBairro" placeholder="Bairro">
          </div>
          <div class="field">
            <span>Cidade / UF</span>
            <input type="text" id="ckCidade" placeholder="Cidade - UF">
          </div>
        </div>
        <div class="field">
          <span>CEP</span>
          <input type="text" id="ckCep" placeholder="00000-000" inputmode="numeric">
        </div>
      </section>

      <section>
        <h4>Informações adicionais</h4>
        <textarea class="checkout-obs" id="ckObs" placeholder="Prazo desejado, observações sobre o pedido, pontos de referência…"></textarea>
        <p class="hint">Prazo de produção e frete serão confirmados pelo atendimento no WhatsApp.</p>
      </section>
    `;

    const radios = $$('input[name="modalidade"]', body);
    const endSec = $('#enderecoSection', body);
    const aplicarMod = () => {
      const sel = body.querySelector('input[name="modalidade"]:checked')?.value || 'entrega';
      if (endSec) endSec.style.display = sel === 'retirada' ? 'none' : '';
    };
    radios.forEach(r => r.addEventListener('change', aplicarMod));
    aplicarMod();
  }

  function enviar() {
    const linhas = Carrinho.linhas();
    if (!linhas.length) { toast('Carrinho vazio.'); return; }

    const modalidade = body.querySelector('input[name="modalidade"]:checked')?.value || 'entrega';
    const endereco = ($('#ckEndereco', body)?.value || '').trim();
    const bairro = ($('#ckBairro', body)?.value || '').trim();
    const cidade = ($('#ckCidade', body)?.value || '').trim();
    const cep = ($('#ckCep', body)?.value || '').trim();
    const obs = ($('#ckObs', body)?.value || '').trim();

    if (modalidade === 'entrega' && (!endereco || !bairro || !cidade)) {
      toast('Preencha endereço, bairro e cidade para entrega.');
      return;
    }

    const s = sessao();
    const nomeCliente = s?.nome || 'Cliente';

    const itensTxt = linhas.map(l => {
      const persTxt = l.pers && Object.keys(l.pers).length
        ? '\n   ' + Object.entries(l.pers)
            .filter(([, v]) => String(v || '').trim() !== '')
            .map(([k, v]) => `• ${labelPers(l.produto, k)}: ${v}`)
            .join('\n   ')
        : '';
      return `• ${l.qtd}x ${l.produto.nome} — ${brl(l.produto.preco * l.qtd)}${persTxt}`;
    }).join('\n');

    const total = brl(Carrinho.totalValor());

    let localTxt = '';
    if (modalidade === 'entrega') {
      localTxt = `\n*Entrega:*\n${endereco}${bairro ? `, ${bairro}` : ''}${cidade ? ` — ${cidade}` : ''}${cep ? `\nCEP: ${cep}` : ''}`;
    } else {
      localTxt = `\n*Retirada em mãos* (combinar local e horário no atendimento)`;
    }

    const msg = `Olá, Lumina Studio! Quero finalizar este pedido:

*Cliente:* ${nomeCliente}

*Itens:*
${itensTxt}

*Total:* ${total}
${localTxt}
${obs ? `\n*Observações:* ${obs}` : ''}

Prazo e frete a confirmar no atendimento. Obrigado!`;

    window.open(waLink(msg), '_blank', 'noopener');
  }

  function init() {
    modal = $('#checkout');
    overlay = $('#overlay');
    body = $('#checkoutBody');
    totalEl = $('#checkoutTotal');
    btnEnviar = $('#enviarWhats');
    btnFechar = $('#fecharCheckout');
    if (!modal) return;

    if (btnFechar) btnFechar.onclick = fechar;
    if (overlay) overlay.addEventListener('click', () => {
      if (modal.classList.contains('show')) fechar();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) fechar();
    });
    if (btnEnviar) btnEnviar.onclick = enviar;
  }

  return { init, abrir, fechar };
})();

window.LuminaCheckout = LuminaCheckout;

function initContato() {
  const form = $('#contatoForm');
  if (!form) return;

  form.onsubmit = (e) => {
    e.preventDefault();
    const nome = ($('#cNome')?.value || '').trim();
    const msg = ($('#cMsg')?.value || '').trim();
    const erro = $('#cMsgErro');

    if (!nome || !msg) {
      if (erro) erro.textContent = 'Preencha nome e mensagem.';
      return;
    }
    if (erro) erro.textContent = '';

    window.open(waLink(`Olá, Lumina Studio! Sou ${nome}.\n\n${msg}`), '_blank', 'noopener');
    form.reset();
    toast('Mensagem pronta no WhatsApp');
  };
}

function init() {
  setLinksContato(document);

  const temAuth = !!$('#authForm');
  const temGrid = !!$('#grid');
  const temProduto = !!$('#produtoView');

  if (temAuth) {
    initAuth();
    return;
  }

  if (!sessao()) {
    window.location.replace('login.html');
    return;
  }

  initHeader();
  initDrawer();
  LuminaCheckout.init();

  if (temGrid) initCatalogo();
  if (temProduto) initProduto();

  initContato();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
