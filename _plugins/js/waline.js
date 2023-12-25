!(function (e, t) {
  if ("function" == typeof define && define.amd) define("Waline", ["exports"], t);
  else if ("undefined" != typeof exports) t(exports);
  else {
    var n = { exports: {} };
    t(n.exports), (e.Waline = n.exports);
  }
})(
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this,
  function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.version =
        e.pageviewCount =
        e.init =
        e.defaultLocales =
        e.commentCount =
        e.RecentComments =
          void 0);
    const t = ["nick", "mail", "link"],
      n = e => e.filter(e => t.includes(e)),
      o = "zh-CN",
      r = e =>
        new Promise((t, n) => {
          const o = new FileReader();
          o.readAsDataURL(e),
            (o.onload = () => {
              var e;
              return t((null === (e = o.result) || void 0 === e ? void 0 : e.toString()) || "");
            }),
            (o.onerror = n);
        }),
      l = e =>
        !0 === e
          ? '<p class="wl-tex">Tex is not available in preview</p>'
          : '<span class="wl-tex">Tex is not available in preview</span>',
      i = () => {
        const e = { next: "" },
          t = e => {
            let { keyword: t, pos: n } = e;
            const o = new URLSearchParams("media_filter=minimal");
            return (
              o.set("key", "PAY5JLFIH6V6"),
              o.set("limit", "20"),
              o.set("pos", n || ""),
              o.set("q", t),
              fetch("".concat("https://g.tenor.com/v1/search", "?").concat(o.toString()), {
                headers: { "Content-Type": "application/json" },
              })
                .then(e => e.json())
                .catch(() => ({ next: n || "", results: [] }))
            );
          };
        return {
          search: function () {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return t({ keyword: n }).then(
              t => (
                (e.next = t.next),
                t.results.map(e => ({ title: e.title, src: e.media[0].tinygif.url }))
              )
            );
          },
          more: n =>
            t({ keyword: n, pos: e.next }).then(
              t => (
                (e.next = t.next),
                t.results.map(e => ({ title: e.title, src: e.media[0].tinygif.url }))
              )
            ),
        };
      },
      s = new RegExp(
        "("
          .concat(
            /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/
              .source,
            "|"
          )
          .concat(/</.source, ")|((?:")
          .concat(/(?:^|\s)\/\/(.+?)$/gm.source, ")|(?:")
          .concat(/\/\*([\S\s]*?)\*\//gm.source, "))"),
        "gmi"
      ),
      a = [
        "23AC69",
        "91C132",
        "F19726",
        "E8552D",
        "1AAB8E",
        "E1147F",
        "2980C1",
        "1BA1E6",
        "9FA0A0",
        "F19726",
        "E30B20",
        "E30B20",
        "A3338B",
      ],
      c = {},
      u = e => {
        let t = 0;
        return e.replace(s, (e, n, o) => {
          if (o) return '<span style="color: slategray">'.concat(o, "</span>");
          if ("<" === n) return "&lt;";
          let r;
          c[n] ? (r = c[n]) : ((r = a[t]), (c[n] = r));
          const l = '<span style="color: #'.concat(r, '">').concat(n, "</span>");
          return (t = ++t % a.length), l;
        });
      },
      p = [
        "nick",
        "nickError",
        "mail",
        "mailError",
        "link",
        "optional",
        "placeholder",
        "sofa",
        "submit",
        "like",
        "cancelLike",
        "reply",
        "cancelReply",
        "comment",
        "refresh",
        "more",
        "preview",
        "emoji",
        "uploadImage",
        "seconds",
        "minutes",
        "hours",
        "days",
        "now",
        "uploading",
        "login",
        "logout",
        "admin",
        "sticky",
        "word",
        "wordHint",
        "anonymous",
        "level0",
        "level1",
        "level2",
        "level3",
        "level4",
        "level5",
        "gif",
        "gifSearchPlaceholder",
      ],
      d = e => Object.fromEntries(e.map((e, t) => [p[t], e]));
    var h = d([
        "NickName",
        "NickName cannot be less than 3 bytes.",
        "E-Mail",
        "Please confirm your email address.",
        "Website",
        "Optional",
        "Comment here...",
        "No comment yet.",
        "Submit",
        "Like",
        "Cancel like",
        "Reply",
        "Cancel reply",
        "Comments",
        "Refresh",
        "Load More...",
        "Preview",
        "Emoji",
        "Upload Image",
        "seconds ago",
        "minutes ago",
        "hours ago",
        "days ago",
        "just now",
        "Uploading",
        "Login",
        "logout",
        "Admin",
        "Sticky",
        "Words",
        "Please input comments between $0 and $1 words!\n Current word number: $2",
        "Anonymous",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Search GIF",
      ]),
      f = d([
        "ニックネーム",
        "3バイト以上のニックネームをご入力ください.",
        "メールアドレス",
        "メールアドレスをご確認ください.",
        "サイト",
        "オプション",
        "ここにコメント",
        "コメントしましょう~",
        "提出する",
        "Like",
        "Cancel like",
        "返信する",
        "キャンセル",
        "コメント",
        "更新",
        "さらに読み込む",
        "プレビュー",
        "絵文字",
        "画像をアップロード",
        "秒前",
        "分前",
        "時間前",
        "日前",
        "たっだ今",
        "アップロード",
        "ログインする",
        "ログアウト",
        "管理者",
        "トップに置く",
        "ワード",
        "コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2",
        "匿名",
        "うえにん",
        "なかにん",
        "しもおし",
        "特にしもおし",
        "かげ",
        "なぬし",
        "GIF",
        "探す GIF",
      ]),
      g = d([
        "昵称",
        "昵称不能少于3个字符",
        "邮箱",
        "请填写正确的邮件地址",
        "网址",
        "可选",
        "欢迎评论",
        "来发评论吧~",
        "提交",
        "喜欢",
        "取消喜欢",
        "回复",
        "取消回复",
        "评论",
        "刷新",
        "加载更多...",
        "预览",
        "表情",
        "上传图片",
        "秒前",
        "分钟前",
        "小时前",
        "天前",
        "刚刚",
        "正在上传",
        "登录",
        "退出",
        "博主",
        "置顶",
        "字",
        "评论字数应在 $0 到 $1 字之间！\n当前字数：$2",
        "匿名",
        "潜水",
        "冒泡",
        "吐槽",
        "活跃",
        "话痨",
        "传说",
        "表情包",
        "搜索表情包",
      ]),
      m = d([
        "暱稱",
        "郵箱",
        "網址",
        "可選",
        "暱稱不能少於3個字元",
        "請填寫正確的郵件地址",
        "歡迎評論",
        "來發評論吧~",
        "提交",
        "喜歡",
        "取消喜歡",
        "回覆",
        "取消回覆",
        "評論",
        "刷新",
        "載入更多...",
        "預覽",
        "表情",
        "上傳圖片",
        "秒前",
        "分鐘前",
        "小時前",
        "天前",
        "剛剛",
        "正在上傳",
        "登錄",
        "退出",
        "博主",
        "置頂",
        "字",
        "評論字數應在 $0 到 $1 字之間！\n當前字數：$2",
        "匿名",
        "潛水",
        "冒泡",
        "吐槽",
        "活躍",
        "話癆",
        "傳說",
        "表情包",
        "搜索表情包",
      ]),
      v = d([
        "Apelido",
        "Apelido não pode ser menor que 3 bytes.",
        "E-Mail",
        "Por favor, confirme seu endereço de e-mail.",
        "Website",
        "Opcional",
        "Comente aqui...",
        "Nenhum comentário, ainda.",
        "Enviar",
        "Like",
        "Cancel like",
        "Responder",
        "Cancelar resposta",
        "Comentários",
        "Refrescar",
        "Carregar Mais...",
        "Visualizar",
        "Emoji",
        "Enviar Imagem",
        "segundos atrás",
        "minutos atrás",
        "horas atrás",
        "dias atrás",
        "agora mesmo",
        "Enviando",
        "Entrar",
        "Sair",
        "Admin",
        "Sticky",
        "Palavras",
        "Favor enviar comentário com $0 a $1 palavras!\n Número de palavras atuais: $2",
        "Anônimo",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Pesquisar GIF",
      ]),
      y = d([
        "Псевдоним",
        "Никнейм не может быть меньше 3 байт.",
        "Эл. адрес",
        "Пожалуйста, подтвердите адрес вашей электронной почты.",
        "Веб-сайт",
        "Необязательный",
        "Комментарий здесь...",
        "Пока нет комментариев.",
        "Отправить",
        "Like",
        "Cancel like",
        "Отвечать",
        "Отменить ответ",
        "Комментарии",
        "Обновить",
        "Загрузи больше...",
        "Превью",
        "эмодзи",
        "Загрузить изображение",
        "секунд назад",
        "несколько минут назад",
        "несколько часов назад",
        "дней назад",
        "прямо сейчас",
        "Загрузка",
        "Авторизоваться",
        "Выход из системы",
        "Админ",
        "Липкий",
        "Слова",
        "Пожалуйста, введите комментарии от $0 до $1 слов!\nНомер текущего слова: $2",
        "Анонимный",
        "Dwarves",
        "Hobbits",
        "Ents",
        "Wizards",
        "Elves",
        "Maiar",
        "GIF",
        "Поиск GIF",
      ]);
    const w = {
      zh: g,
      "zh-cn": g,
      "zh-CN": g,
      "zh-tw": m,
      "zh-TW": m,
      en: h,
      "en-US": h,
      "en-us": h,
      jp: f,
      "jp-jp": f,
      "jp-JP": f,
      "pt-br": v,
      "pt-BR": v,
      ru: y,
      "ru-ru": y,
      "ru-RU": y,
    };
    function k(e, t) {
      const n = Object.create(null),
        o = e.split(",");
      for (let e = 0; e < o.length; e++) n[o[e]] = !0;
      return t ? e => !!n[e.toLowerCase()] : e => !!n[e];
    }
    e.defaultLocales = w;
    const b = k("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
    function x(e) {
      return !!e || "" === e;
    }
    function _(e) {
      if (D(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
          const o = e[n],
            r = G(o) ? I(o) : _(o);
          if (r) for (const e in r) t[e] = r[e];
        }
        return t;
      }
      return G(e) || K(e) ? e : void 0;
    }
    const S = /;(?![^(]*\))/g,
      C = /:(.+)/;
    function I(e) {
      const t = {};
      return (
        e.split(S).forEach(e => {
          if (e) {
            const n = e.split(C);
            n.length > 1 && (t[n[0].trim()] = n[1].trim());
          }
        }),
        t
      );
    }
    function z(e) {
      let t = "";
      if (G(e)) t = e;
      else if (D(e))
        for (let n = 0; n < e.length; n++) {
          const o = z(e[n]);
          o && (t += o + " ");
        }
      else if (K(e)) for (const n in e) e[n] && (t += n + " ");
      return t.trim();
    }
    function R(e, t) {
      if (e === t) return !0;
      let n = q(e),
        o = q(t);
      if (n || o) return !(!n || !o) && e.getTime() === t.getTime();
      if (((n = J(e)), (o = J(t)), n || o)) return e === t;
      if (((n = D(e)), (o = D(t)), n || o))
        return (
          !(!n || !o) &&
          (function (e, t) {
            if (e.length !== t.length) return !1;
            let n = !0;
            for (let o = 0; n && o < e.length; o++) n = R(e[o], t[o]);
            return n;
          })(e, t)
        );
      if (((n = K(e)), (o = K(t)), n || o)) {
        if (!n || !o) return !1;
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const n in e) {
          const o = e.hasOwnProperty(n),
            r = t.hasOwnProperty(n);
          if ((o && !r) || (!o && r) || !R(e[n], t[n])) return !1;
        }
      }
      return String(e) === String(t);
    }
    function E(e, t) {
      return e.findIndex(e => R(e, t));
    }
    const A = e =>
        G(e)
          ? e
          : null == e
          ? ""
          : D(e) || (K(e) && (e.toString === Y || !Z(e.toString)))
          ? JSON.stringify(e, L, 2)
          : String(e),
      L = (e, t) =>
        t && t.__v_isRef
          ? L(e, t.value)
          : H(t)
          ? {
              ["Map(".concat(t.size, ")")]: [...t.entries()].reduce((e, t) => {
                let [n, o] = t;
                return (e["".concat(n, " =>")] = o), e;
              }, {}),
            }
          : W(t)
          ? { ["Set(".concat(t.size, ")")]: [...t.values()] }
          : !K(t) || D(t) || ee(t)
          ? t
          : String(t),
      T = {},
      j = [],
      $ = () => {},
      O = () => !1,
      U = /^on[^a-z]/,
      M = e => U.test(e),
      P = e => e.startsWith("onUpdate:"),
      F = Object.assign,
      N = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      },
      V = Object.prototype.hasOwnProperty,
      B = (e, t) => V.call(e, t),
      D = Array.isArray,
      H = e => "[object Map]" === X(e),
      W = e => "[object Set]" === X(e),
      q = e => "[object Date]" === X(e),
      Z = e => "function" == typeof e,
      G = e => "string" == typeof e,
      J = e => "symbol" == typeof e,
      K = e => null !== e && "object" == typeof e,
      Q = e => K(e) && Z(e.then) && Z(e.catch),
      Y = Object.prototype.toString,
      X = e => Y.call(e),
      ee = e => "[object Object]" === X(e),
      te = e => G(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
      ne = k(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      ),
      oe = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n));
      },
      re = /-(\w)/g,
      le = oe(e => e.replace(re, (e, t) => (t ? t.toUpperCase() : ""))),
      ie = /\B([A-Z])/g,
      se = oe(e => e.replace(ie, "-$1").toLowerCase()),
      ae = oe(e => e.charAt(0).toUpperCase() + e.slice(1)),
      ce = oe(e => (e ? "on".concat(ae(e)) : "")),
      ue = (e, t) => !Object.is(e, t),
      pe = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t);
      },
      de = (e, t, n) => {
        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
      },
      he = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
      };
    let fe;
    let ge;
    class me {
      constructor() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.active = !0),
          (this.effects = []),
          (this.cleanups = []),
          !e &&
            ge &&
            ((this.parent = ge), (this.index = (ge.scopes || (ge.scopes = [])).push(this) - 1));
      }
      run(e) {
        if (this.active) {
          const t = ge;
          try {
            return (ge = this), e();
          } finally {
            ge = t;
          }
        }
      }
      on() {
        ge = this;
      }
      off() {
        ge = this.parent;
      }
      stop(e) {
        if (this.active) {
          let t, n;
          for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
          for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
          if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
          if (this.parent && !e) {
            const e = this.parent.scopes.pop();
            e && e !== this && ((this.parent.scopes[this.index] = e), (e.index = this.index));
          }
          this.active = !1;
        }
      }
    }
    const ve = e => {
        const t = new Set(e);
        return (t.w = 0), (t.n = 0), t;
      },
      ye = e => (e.w & xe) > 0,
      we = e => (e.n & xe) > 0,
      ke = new WeakMap();
    let be = 0,
      xe = 1;
    let _e;
    const Se = Symbol(""),
      Ce = Symbol("");
    class Ie {
      constructor(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = arguments.length > 2 ? arguments[2] : void 0;
        (this.fn = e),
          (this.scheduler = t),
          (this.active = !0),
          (this.deps = []),
          (this.parent = void 0),
          (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge;
            t && t.active && t.effects.push(e);
          })(this, n);
      }
      run() {
        if (!this.active) return this.fn();
        let e = _e,
          t = Re;
        for (; e; ) {
          if (e === this) return;
          e = e.parent;
        }
        try {
          return (
            (this.parent = _e),
            (_e = this),
            (Re = !0),
            (xe = 1 << ++be),
            be <= 30
              ? (e => {
                  let { deps: t } = e;
                  if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= xe;
                })(this)
              : ze(this),
            this.fn()
          );
        } finally {
          be <= 30 &&
            (e => {
              const { deps: t } = e;
              if (t.length) {
                let n = 0;
                for (let o = 0; o < t.length; o++) {
                  const r = t[o];
                  ye(r) && !we(r) ? r.delete(e) : (t[n++] = r), (r.w &= ~xe), (r.n &= ~xe);
                }
                t.length = n;
              }
            })(this),
            (xe = 1 << --be),
            (_e = this.parent),
            (Re = t),
            (this.parent = void 0),
            this.deferStop && this.stop();
        }
      }
      stop() {
        _e === this
          ? (this.deferStop = !0)
          : this.active && (ze(this), this.onStop && this.onStop(), (this.active = !1));
      }
    }
    function ze(e) {
      const { deps: t } = e;
      if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0;
      }
    }
    let Re = !0;
    const Ee = [];
    function Ae() {
      Ee.push(Re), (Re = !1);
    }
    function Le() {
      const e = Ee.pop();
      Re = void 0 === e || e;
    }
    function Te(e, t, n) {
      if (Re && _e) {
        let t = ke.get(e);
        t || ke.set(e, (t = new Map()));
        let o = t.get(n);
        o || t.set(n, (o = ve())), je(o);
      }
    }
    function je(e, t) {
      let n = !1;
      be <= 30 ? we(e) || ((e.n |= xe), (n = !ye(e))) : (n = !e.has(_e)),
        n && (e.add(_e), _e.deps.push(e));
    }
    function $e(e, t, n, o, r, l) {
      const i = ke.get(e);
      if (!i) return;
      let s = [];
      if ("clear" === t) s = [...i.values()];
      else if ("length" === n && D(e))
        i.forEach((e, t) => {
          ("length" === t || t >= o) && s.push(e);
        });
      else
        switch ((void 0 !== n && s.push(i.get(n)), t)) {
          case "add":
            D(e)
              ? te(n) && s.push(i.get("length"))
              : (s.push(i.get(Se)), H(e) && s.push(i.get(Ce)));
            break;
          case "delete":
            D(e) || (s.push(i.get(Se)), H(e) && s.push(i.get(Ce)));
            break;
          case "set":
            H(e) && s.push(i.get(Se));
        }
      if (1 === s.length) s[0] && Oe(s[0]);
      else {
        const e = [];
        for (const t of s) t && e.push(...t);
        Oe(ve(e));
      }
    }
    function Oe(e, t) {
      const n = D(e) ? e : [...e];
      for (const e of n) e.computed && Ue(e);
      for (const e of n) e.computed || Ue(e);
    }
    function Ue(e, t) {
      (e !== _e || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
    }
    const Me = k("__proto__,__v_isRef,__isVue"),
      Pe = new Set(
        Object.getOwnPropertyNames(Symbol)
          .filter(e => "arguments" !== e && "caller" !== e)
          .map(e => Symbol[e])
          .filter(J)
      ),
      Fe = He(),
      Ne = He(!1, !0),
      Ve = He(!0),
      Be = De();
    function De() {
      const e = {};
      return (
        ["includes", "indexOf", "lastIndexOf"].forEach(t => {
          e[t] = function () {
            const e = Et(this);
            for (let t = 0, n = this.length; t < n; t++) Te(e, 0, t + "");
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            const l = e[t](...o);
            return -1 === l || !1 === l ? e[t](...o.map(Et)) : l;
          };
        }),
        ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
          e[t] = function () {
            Ae();
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            const r = Et(this)[t].apply(this, n);
            return Le(), r;
          };
        }),
        e
      );
    }
    function He() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return function (n, o, r) {
        if ("__v_isReactive" === o) return !e;
        if ("__v_isReadonly" === o) return e;
        if ("__v_isShallow" === o) return t;
        if ("__v_raw" === o && r === (e ? (t ? wt : yt) : t ? vt : mt).get(n)) return n;
        const l = D(n);
        if (!e && l && B(Be, o)) return Reflect.get(Be, o, r);
        const i = Reflect.get(n, o, r);
        return (J(o) ? Pe.has(o) : Me(o))
          ? i
          : (e || Te(n, 0, o),
            t ? i : Ot(i) ? (l && te(o) ? i : i.value) : K(i) ? (e ? _t(i) : bt(i)) : i);
      };
    }
    function We() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return function (t, n, o, r) {
        let l = t[n];
        if (It(l) && Ot(l) && !Ot(o)) return !1;
        if (!e && !It(o) && (zt(o) || ((o = Et(o)), (l = Et(l))), !D(t) && Ot(l) && !Ot(o)))
          return (l.value = o), !0;
        const i = D(t) && te(n) ? Number(n) < t.length : B(t, n),
          s = Reflect.set(t, n, o, r);
        return t === Et(r) && (i ? ue(o, l) && $e(t, "set", n, o) : $e(t, "add", n, o)), s;
      };
    }
    const qe = {
        get: Fe,
        set: We(),
        deleteProperty: function (e, t) {
          const n = B(e, t),
            o = Reflect.deleteProperty(e, t);
          return o && n && $e(e, "delete", t, void 0), o;
        },
        has: function (e, t) {
          const n = Reflect.has(e, t);
          return (J(t) && Pe.has(t)) || Te(e, 0, t), n;
        },
        ownKeys: function (e) {
          return Te(e, 0, D(e) ? "length" : Se), Reflect.ownKeys(e);
        },
      },
      Ze = { get: Ve, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
      Ge = F({}, qe, { get: Ne, set: We(!0) }),
      Je = e => e,
      Ke = e => Reflect.getPrototypeOf(e);
    function Qe(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const r = Et((e = e.__v_raw)),
        l = Et(t);
      n || (t !== l && Te(r, 0, t), Te(r, 0, l));
      const { has: i } = Ke(r),
        s = o ? Je : n ? Tt : Lt;
      return i.call(r, t) ? s(e.get(t)) : i.call(r, l) ? s(e.get(l)) : void (e !== r && e.get(t));
    }
    function Ye(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const n = this.__v_raw,
        o = Et(n),
        r = Et(e);
      return t || (e !== r && Te(o, 0, e), Te(o, 0, r)), e === r ? n.has(e) : n.has(e) || n.has(r);
    }
    function Xe(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (e = e.__v_raw), !t && Te(Et(e), 0, Se), Reflect.get(e, "size", e);
    }
    function et(e) {
      e = Et(e);
      const t = Et(this);
      return Ke(t).has.call(t, e) || (t.add(e), $e(t, "add", e, e)), this;
    }
    function tt(e, t) {
      t = Et(t);
      const n = Et(this),
        { has: o, get: r } = Ke(n);
      let l = o.call(n, e);
      l || ((e = Et(e)), (l = o.call(n, e)));
      const i = r.call(n, e);
      return n.set(e, t), l ? ue(t, i) && $e(n, "set", e, t) : $e(n, "add", e, t), this;
    }
    function nt(e) {
      const t = Et(this),
        { has: n, get: o } = Ke(t);
      let r = n.call(t, e);
      r || ((e = Et(e)), (r = n.call(t, e))), o && o.call(t, e);
      const l = t.delete(e);
      return r && $e(t, "delete", e, void 0), l;
    }
    function ot() {
      const e = Et(this),
        t = 0 !== e.size,
        n = e.clear();
      return t && $e(e, "clear", void 0, void 0), n;
    }
    function rt(e, t) {
      return function (n, o) {
        const r = this,
          l = r.__v_raw,
          i = Et(l),
          s = t ? Je : e ? Tt : Lt;
        return !e && Te(i, 0, Se), l.forEach((e, t) => n.call(o, s(e), s(t), r));
      };
    }
    function lt(e, t, n) {
      return function () {
        const o = this.__v_raw,
          r = Et(o),
          l = H(r),
          i = "entries" === e || (e === Symbol.iterator && l),
          s = "keys" === e && l,
          a = o[e](...arguments),
          c = n ? Je : t ? Tt : Lt;
        return (
          !t && Te(r, 0, s ? Ce : Se),
          {
            next() {
              const { value: e, done: t } = a.next();
              return t ? { value: e, done: t } : { value: i ? [c(e[0]), c(e[1])] : c(e), done: t };
            },
            [Symbol.iterator]() {
              return this;
            },
          }
        );
      };
    }
    function it(e) {
      return function () {
        return "delete" !== e && this;
      };
    }
    function st() {
      const e = {
          get(e) {
            return Qe(this, e);
          },
          get size() {
            return Xe(this);
          },
          has: Ye,
          add: et,
          set: tt,
          delete: nt,
          clear: ot,
          forEach: rt(!1, !1),
        },
        t = {
          get(e) {
            return Qe(this, e, !1, !0);
          },
          get size() {
            return Xe(this);
          },
          has: Ye,
          add: et,
          set: tt,
          delete: nt,
          clear: ot,
          forEach: rt(!1, !0),
        },
        n = {
          get(e) {
            return Qe(this, e, !0);
          },
          get size() {
            return Xe(this, !0);
          },
          has(e) {
            return Ye.call(this, e, !0);
          },
          add: it("add"),
          set: it("set"),
          delete: it("delete"),
          clear: it("clear"),
          forEach: rt(!0, !1),
        },
        o = {
          get(e) {
            return Qe(this, e, !0, !0);
          },
          get size() {
            return Xe(this, !0);
          },
          has(e) {
            return Ye.call(this, e, !0);
          },
          add: it("add"),
          set: it("set"),
          delete: it("delete"),
          clear: it("clear"),
          forEach: rt(!0, !0),
        };
      return (
        ["keys", "values", "entries", Symbol.iterator].forEach(r => {
          (e[r] = lt(r, !1, !1)),
            (n[r] = lt(r, !0, !1)),
            (t[r] = lt(r, !1, !0)),
            (o[r] = lt(r, !0, !0));
        }),
        [e, n, t, o]
      );
    }
    const [at, ct, ut, pt] = st();
    function dt(e, t) {
      const n = t ? (e ? pt : ut) : e ? ct : at;
      return (t, o, r) =>
        "__v_isReactive" === o
          ? !e
          : "__v_isReadonly" === o
          ? e
          : "__v_raw" === o
          ? t
          : Reflect.get(B(n, o) && o in t ? n : t, o, r);
    }
    const ht = { get: dt(!1, !1) },
      ft = { get: dt(!1, !0) },
      gt = { get: dt(!0, !1) },
      mt = new WeakMap(),
      vt = new WeakMap(),
      yt = new WeakMap(),
      wt = new WeakMap();
    function kt(e) {
      return e.__v_skip || !Object.isExtensible(e)
        ? 0
        : (function (e) {
            switch (e) {
              case "Object":
              case "Array":
                return 1;
              case "Map":
              case "Set":
              case "WeakMap":
              case "WeakSet":
                return 2;
              default:
                return 0;
            }
          })((e => X(e).slice(8, -1))(e));
    }
    function bt(e) {
      return It(e) ? e : St(e, !1, qe, ht, mt);
    }
    function xt(e) {
      return St(e, !1, Ge, ft, vt);
    }
    function _t(e) {
      return St(e, !0, Ze, gt, yt);
    }
    function St(e, t, n, o, r) {
      if (!K(e)) return e;
      if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
      const l = r.get(e);
      if (l) return l;
      const i = kt(e);
      if (0 === i) return e;
      const s = new Proxy(e, 2 === i ? o : n);
      return r.set(e, s), s;
    }
    function Ct(e) {
      return It(e) ? Ct(e.__v_raw) : !(!e || !e.__v_isReactive);
    }
    function It(e) {
      return !(!e || !e.__v_isReadonly);
    }
    function zt(e) {
      return !(!e || !e.__v_isShallow);
    }
    function Rt(e) {
      return Ct(e) || It(e);
    }
    function Et(e) {
      const t = e && e.__v_raw;
      return t ? Et(t) : e;
    }
    function At(e) {
      return de(e, "__v_skip", !0), e;
    }
    const Lt = e => (K(e) ? bt(e) : e),
      Tt = e => (K(e) ? _t(e) : e);
    function jt(e) {
      Re && _e && je((e = Et(e)).dep || (e.dep = ve()));
    }
    function $t(e, t) {
      (e = Et(e)).dep && Oe(e.dep);
    }
    function Ot(e) {
      return !(!e || !0 !== e.__v_isRef);
    }
    function Ut(e) {
      return Pt(e, !1);
    }
    function Mt(e) {
      return Pt(e, !0);
    }
    function Pt(e, t) {
      return Ot(e) ? e : new Ft(e, t);
    }
    class Ft {
      constructor(e, t) {
        (this.__v_isShallow = t),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this._rawValue = t ? e : Et(e)),
          (this._value = t ? e : Lt(e));
      }
      get value() {
        return jt(this), this._value;
      }
      set value(e) {
        (e = this.__v_isShallow ? e : Et(e)),
          ue(e, this._rawValue) &&
            ((this._rawValue = e), (this._value = this.__v_isShallow ? e : Lt(e)), $t(this));
      }
    }
    function Nt(e) {
      return Ot(e) ? e.value : e;
    }
    const Vt = {
      get: (e, t, n) => Nt(Reflect.get(e, t, n)),
      set: (e, t, n, o) => {
        const r = e[t];
        return Ot(r) && !Ot(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o);
      },
    };
    function Bt(e) {
      return Ct(e) ? e : new Proxy(e, Vt);
    }
    class Dt {
      constructor(e, t, n, o) {
        (this._setter = t),
          (this.dep = void 0),
          (this.__v_isRef = !0),
          (this._dirty = !0),
          (this.effect = new Ie(e, () => {
            this._dirty || ((this._dirty = !0), $t(this));
          })),
          (this.effect.computed = this),
          (this.effect.active = this._cacheable = !o),
          (this.__v_isReadonly = n);
      }
      get value() {
        const e = Et(this);
        return (
          jt(e),
          (!e._dirty && e._cacheable) || ((e._dirty = !1), (e._value = e.effect.run())),
          e._value
        );
      }
      set value(e) {
        this._setter(e);
      }
    }
    function Ht(e, t, n, o) {
      let r;
      try {
        r = o ? e(...o) : e();
      } catch (e) {
        qt(e, t, n);
      }
      return r;
    }
    function Wt(e, t, n, o) {
      if (Z(e)) {
        const r = Ht(e, t, n, o);
        return (
          r &&
            Q(r) &&
            r.catch(e => {
              qt(e, t, n);
            }),
          r
        );
      }
      const r = [];
      for (let l = 0; l < e.length; l++) r.push(Wt(e[l], t, n, o));
      return r;
    }
    function qt(e, t, n) {
      let o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const r = t ? t.vnode : null;
      if (t) {
        let o = t.parent;
        const r = t.proxy,
          l = n;
        for (; o; ) {
          const t = o.ec;
          if (t) for (let n = 0; n < t.length; n++) if (!1 === t[n](e, r, l)) return;
          o = o.parent;
        }
        const i = t.appContext.config.errorHandler;
        if (i) return void Ht(i, null, 10, [e, r, l]);
      }
      Zt(e, n, r, o);
    }
    function Zt(e, t, n) {
      console.error(e);
    }
    let Gt = !1,
      Jt = !1;
    const Kt = [];
    let Qt = 0;
    const Yt = [];
    let Xt = null,
      en = 0;
    const tn = [];
    let nn = null,
      on = 0;
    const rn = Promise.resolve();
    let ln = null,
      sn = null;
    function an(e) {
      const t = ln || rn;
      return e ? t.then(this ? e.bind(this) : e) : t;
    }
    function cn(e) {
      (Kt.length && Kt.includes(e, Gt && e.allowRecurse ? Qt + 1 : Qt)) ||
        e === sn ||
        (null == e.id
          ? Kt.push(e)
          : Kt.splice(
              (function (e) {
                let t = Qt + 1,
                  n = Kt.length;
                for (; t < n; ) {
                  const o = (t + n) >>> 1;
                  gn(Kt[o]) < e ? (t = o + 1) : (n = o);
                }
                return t;
              })(e.id),
              0,
              e
            ),
        un());
    }
    function un() {
      Gt || Jt || ((Jt = !0), (ln = rn.then(mn)));
    }
    function pn(e, t, n, o) {
      D(e) ? n.push(...e) : (t && t.includes(e, e.allowRecurse ? o + 1 : o)) || n.push(e), un();
    }
    function dn(e) {
      pn(e, Xt, Yt, en);
    }
    function hn(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (Yt.length) {
        for (sn = t, Xt = [...new Set(Yt)], Yt.length = 0, en = 0; en < Xt.length; en++) Xt[en]();
        (Xt = null), (en = 0), (sn = null), hn(e, t);
      }
    }
    function fn(e) {
      if ((hn(), tn.length)) {
        const e = [...new Set(tn)];
        if (((tn.length = 0), nn)) return void nn.push(...e);
        for (nn = e, nn.sort((e, t) => gn(e) - gn(t)), on = 0; on < nn.length; on++) nn[on]();
        (nn = null), (on = 0);
      }
    }
    const gn = e => (null == e.id ? 1 / 0 : e.id);
    function mn(e) {
      (Jt = !1), (Gt = !0), hn(e), Kt.sort((e, t) => gn(e) - gn(t));
      try {
        for (Qt = 0; Qt < Kt.length; Qt++) {
          const e = Kt[Qt];
          e && !1 !== e.active && Ht(e, null, 14);
        }
      } finally {
        (Qt = 0),
          (Kt.length = 0),
          fn(),
          (Gt = !1),
          (ln = null),
          (Kt.length || Yt.length || tn.length) && mn(e);
      }
    }
    function vn(e, t) {
      if (e.isUnmounted) return;
      const n = e.vnode.props || T;
      for (var o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), l = 2; l < o; l++)
        r[l - 2] = arguments[l];
      let i = r;
      const s = t.startsWith("update:"),
        a = s && t.slice(7);
      if (a && a in n) {
        const e = "".concat("modelValue" === a ? "model" : a, "Modifiers"),
          { number: t, trim: o } = n[e] || T;
        o && (i = r.map(e => e.trim())), t && (i = r.map(he));
      }
      let c,
        u = n[(c = ce(t))] || n[(c = ce(le(t)))];
      !u && s && (u = n[(c = ce(se(t)))]), u && Wt(u, e, 6, i);
      const p = n[c + "Once"];
      if (p) {
        if (e.emitted) {
          if (e.emitted[c]) return;
        } else e.emitted = {};
        (e.emitted[c] = !0), Wt(p, e, 6, i);
      }
    }
    function yn(e, t) {
      const n = t.emitsCache,
        o = n.get(e);
      if (void 0 !== o) return o;
      const r = e.emits;
      let l = {},
        i = !1;
      return r || i
        ? (D(r) ? r.forEach(e => (l[e] = null)) : F(l, r), n.set(e, l), l)
        : (n.set(e, null), null);
    }
    function wn(e, t) {
      return (
        !(!e || !M(t)) &&
        ((t = t.slice(2).replace(/Once$/, "")),
        B(e, t[0].toLowerCase() + t.slice(1)) || B(e, se(t)) || B(e, t))
      );
    }
    let kn = null,
      bn = null;
    function xn(e) {
      const t = kn;
      return (kn = e), (bn = (e && e.type.__scopeId) || null), t;
    }
    function _n(e) {
      const {
        type: t,
        vnode: n,
        proxy: o,
        withProxy: r,
        props: l,
        propsOptions: [i],
        slots: s,
        attrs: a,
        emit: c,
        render: u,
        renderCache: p,
        data: d,
        setupState: h,
        ctx: f,
        inheritAttrs: g,
      } = e;
      let m, v;
      const y = xn(e);
      try {
        if (4 & n.shapeFlag) {
          const e = r || o;
          (m = Ho(u.call(e, e, p, l, h, d, f))), (v = a);
        } else {
          const e = t;
          (m = Ho(e.length > 1 ? e(l, { attrs: a, slots: s, emit: c }) : e(l, null))),
            (v = t.props ? a : Sn(a));
        }
      } catch (t) {
        (Co.length = 0), qt(t, e, 1), (m = Fo(_o));
      }
      let w = m;
      if (v && !1 !== g) {
        const e = Object.keys(v),
          { shapeFlag: t } = w;
        e.length && 7 & t && (i && e.some(P) && (v = Cn(v, i)), (w = Vo(w, v)));
      }
      return (
        n.dirs && ((w = Vo(w)), (w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs)),
        n.transition && (w.transition = n.transition),
        (m = w),
        xn(y),
        m
      );
    }
    const Sn = e => {
        let t;
        for (const n in e) ("class" === n || "style" === n || M(n)) && ((t || (t = {}))[n] = e[n]);
        return t;
      },
      Cn = (e, t) => {
        const n = {};
        for (const o in e) (P(o) && o.slice(9) in t) || (n[o] = e[o]);
        return n;
      };
    function In(e, t, n) {
      const o = Object.keys(t);
      if (o.length !== Object.keys(e).length) return !0;
      for (let r = 0; r < o.length; r++) {
        const l = o[r];
        if (t[l] !== e[l] && !wn(n, l)) return !0;
      }
      return !1;
    }
    const zn = e => e.__isSuspense;
    function Rn(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const o = Qo || kn;
      if (o) {
        const r =
          null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && Z(t) ? t.call(o.proxy) : t;
      }
    }
    function En(e, t) {
      return Tn(e, null, t);
    }
    const An = {};
    function Ln(e, t, n) {
      return Tn(e, t, n);
    }
    function Tn(e, t) {
      let {
        immediate: n,
        deep: o,
        flush: r,
        onTrack: l,
        onTrigger: i,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
      const s = Qo;
      let a,
        c,
        u = !1,
        p = !1;
      if (
        (Ot(e)
          ? ((a = () => e.value), (u = zt(e)))
          : Ct(e)
          ? ((a = () => e), (o = !0))
          : D(e)
          ? ((p = !0),
            (u = e.some(e => Ct(e) || zt(e))),
            (a = () => e.map(e => (Ot(e) ? e.value : Ct(e) ? jn(e) : Z(e) ? Ht(e, s, 2) : void 0))))
          : (a = Z(e)
              ? t
                ? () => Ht(e, s, 2)
                : () => {
                    if (!s || !s.isUnmounted) return c && c(), Wt(e, s, 3, [d]);
                  }
              : $),
        t && o)
      ) {
        const e = a;
        a = () => jn(e());
      }
      let d = e => {
        c = m.onStop = () => {
          Ht(e, s, 4);
        };
      };
      if (tr) return (d = $), t ? n && Wt(t, s, 3, [a(), p ? [] : void 0, d]) : a(), $;
      let h = p ? [] : An;
      const f = () => {
        if (m.active)
          if (t) {
            const e = m.run();
            (o || u || (p ? e.some((e, t) => ue(e, h[t])) : ue(e, h))) &&
              (c && c(), Wt(t, s, 3, [e, h === An ? void 0 : h, d]), (h = e));
          } else m.run();
      };
      let g;
      (f.allowRecurse = !!t),
        (g = "sync" === r ? f : "post" === r ? () => mo(f, s && s.suspense) : () => dn(f));
      const m = new Ie(a, g);
      return (
        t ? (n ? f() : (h = m.run())) : "post" === r ? mo(m.run.bind(m), s && s.suspense) : m.run(),
        () => {
          m.stop(), s && s.scope && N(s.scope.effects, m);
        }
      );
    }
    function jn(e, t) {
      if (!K(e) || e.__v_skip) return e;
      if ((t = t || new Set()).has(e)) return e;
      if ((t.add(e), Ot(e))) jn(e.value, t);
      else if (D(e)) for (let n = 0; n < e.length; n++) jn(e[n], t);
      else if (W(e) || H(e))
        e.forEach(e => {
          jn(e, t);
        });
      else if (ee(e)) for (const n in e) jn(e[n], t);
      return e;
    }
    function $n(e) {
      return Z(e) ? { setup: e, name: e.name } : e;
    }
    const On = e => !!e.type.__asyncLoader;
    function Un(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qo,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (n) {
        const r = n[e] || (n[e] = []),
          l =
            t.__weh ||
            (t.__weh = function () {
              if (n.isUnmounted) return;
              Ae(), Yo(n);
              for (var o = arguments.length, r = new Array(o), l = 0; l < o; l++)
                r[l] = arguments[l];
              const i = Wt(t, n, e, r);
              return Xo(), Le(), i;
            });
        return o ? r.unshift(l) : r.push(l), l;
      }
    }
    const Mn = e =>
        function (t) {
          let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Qo;
          return (!tr || "sp" === e) && Un(e, t, n);
        },
      Pn = Mn("m"),
      Fn = Mn("bum"),
      Nn = Mn("um");
    function Vn(e, t) {
      const n = kn;
      if (null === n) return e;
      const o = lr(n) || n.proxy,
        r = e.dirs || (e.dirs = []);
      for (let e = 0; e < t.length; e++) {
        let [n, l, i, s = T] = t[e];
        Z(n) && (n = { mounted: n, updated: n }),
          n.deep && jn(l),
          r.push({ dir: n, instance: o, value: l, oldValue: void 0, arg: i, modifiers: s });
      }
      return e;
    }
    function Bn(e, t, n, o) {
      const r = e.dirs,
        l = t && t.dirs;
      for (let i = 0; i < r.length; i++) {
        const s = r[i];
        l && (s.oldValue = l[i].value);
        let a = s.dir[o];
        a && (Ae(), Wt(a, n, 8, [e.el, s, e, t]), Le());
      }
    }
    const Dn = "components";
    function Hn(e, t) {
      return (
        (function (e, t) {
          let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const o = kn || Qo;
          if (o) {
            const r = o.type;
            if (e === Dn) {
              const e = ir(r, !1);
              if (e && (e === t || e === le(t) || e === ae(le(t)))) return r;
            }
            const l = qn(o[e] || r[e], t) || qn(o.appContext[e], t);
            return !l && n ? r : l;
          }
        })(Dn, e, !0, t) || e
      );
    }
    const Wn = Symbol();
    function qn(e, t) {
      return e && (e[t] || e[le(t)] || e[ae(le(t))]);
    }
    function Zn(e, t, n, o) {
      let r;
      const l = n && n[o];
      if (D(e) || G(e)) {
        r = new Array(e.length);
        for (let n = 0, o = e.length; n < o; n++) r[n] = t(e[n], n, void 0, l && l[n]);
      } else if ("number" == typeof e) {
        r = new Array(e);
        for (let n = 0; n < e; n++) r[n] = t(n + 1, n, void 0, l && l[n]);
      } else if (K(e))
        if (e[Symbol.iterator]) r = Array.from(e, (e, n) => t(e, n, void 0, l && l[n]));
        else {
          const n = Object.keys(e);
          r = new Array(n.length);
          for (let o = 0, i = n.length; o < i; o++) {
            const i = n[o];
            r[o] = t(e[i], i, o, l && l[o]);
          }
        }
      else r = [];
      return n && (n[o] = r), r;
    }
    const Gn = e => (e ? (er(e) ? lr(e) || e.proxy : Gn(e.parent)) : null),
      Jn = F(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Gn(e.parent),
        $root: e => Gn(e.root),
        $emit: e => e.emit,
        $options: e => e.type,
        $forceUpdate: e => e.f || (e.f = () => cn(e.update)),
        $nextTick: e => e.n || (e.n = an.bind(e.proxy)),
        $watch: e => $,
      }),
      Kn = {
        get(e, t) {
          let { _: n } = e;
          const {
            ctx: o,
            setupState: r,
            data: l,
            props: i,
            accessCache: s,
            type: a,
            appContext: c,
          } = n;
          let u;
          if ("$" !== t[0]) {
            const e = s[t];
            if (void 0 !== e)
              switch (e) {
                case 1:
                  return r[t];
                case 2:
                  return l[t];
                case 4:
                  return o[t];
                case 3:
                  return i[t];
              }
            else {
              if (r !== T && B(r, t)) return (s[t] = 1), r[t];
              if (l !== T && B(l, t)) return (s[t] = 2), l[t];
              if ((u = n.propsOptions[0]) && B(u, t)) return (s[t] = 3), i[t];
              if (o !== T && B(o, t)) return (s[t] = 4), o[t];
              s[t] = 0;
            }
          }
          const p = Jn[t];
          let d, h;
          return p
            ? ("$attrs" === t && Te(n, 0, t), p(n))
            : (d = a.__cssModules) && (d = d[t])
            ? d
            : o !== T && B(o, t)
            ? ((s[t] = 4), o[t])
            : ((h = c.config.globalProperties), B(h, t) ? h[t] : void 0);
        },
        set(e, t, n) {
          let { _: o } = e;
          const { data: r, setupState: l, ctx: i } = o;
          return l !== T && B(l, t)
            ? ((l[t] = n), !0)
            : r !== T && B(r, t)
            ? ((r[t] = n), !0)
            : !B(o.props, t) && ("$" !== t[0] || !(t.slice(1) in o)) && ((i[t] = n), !0);
        },
        has(e, t) {
          let n,
            {
              _: { data: o, setupState: r, accessCache: l, ctx: i, appContext: s, propsOptions: a },
            } = e;
          return (
            !!l[t] ||
            (o !== T && B(o, t)) ||
            (r !== T && B(r, t)) ||
            ((n = a[0]) && B(n, t)) ||
            B(i, t) ||
            B(Jn, t) ||
            B(s.config.globalProperties, t)
          );
        },
        defineProperty(e, t, n) {
          return (
            null != n.get
              ? (e._.accessCache[t] = 0)
              : B(n, "value") && this.set(e, t, n.value, null),
            Reflect.defineProperty(e, t, n)
          );
        },
      };
    function Qn(e, t, n) {
      let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const r = {},
        l = {};
      de(l, Oo, 1), (e.propsDefaults = Object.create(null)), Yn(e, t, r, l);
      for (const t in e.propsOptions[0]) t in r || (r[t] = void 0);
      n ? (e.props = o ? r : xt(r)) : e.type.props ? (e.props = r) : (e.props = l), (e.attrs = l);
    }
    function Yn(e, t, n, o) {
      const [r, l] = e.propsOptions;
      let i,
        s = !1;
      if (t)
        for (let a in t) {
          if (ne(a)) continue;
          const c = t[a];
          let u;
          r && B(r, (u = le(a)))
            ? l && l.includes(u)
              ? ((i || (i = {}))[u] = c)
              : (n[u] = c)
            : wn(e.emitsOptions, a) || (a in o && c === o[a]) || ((o[a] = c), (s = !0));
        }
      if (l) {
        const t = Et(n),
          o = i || T;
        for (let i = 0; i < l.length; i++) {
          const s = l[i];
          n[s] = Xn(r, t, s, o[s], e, !B(o, s));
        }
      }
      return s;
    }
    function Xn(e, t, n, o, r, l) {
      const i = e[n];
      if (null != i) {
        const e = B(i, "default");
        if (e && void 0 === o) {
          const e = i.default;
          if (i.type !== Function && Z(e)) {
            const { propsDefaults: l } = r;
            n in l ? (o = l[n]) : (Yo(r), (o = l[n] = e.call(null, t)), Xo());
          } else o = e;
        }
        i[0] && (l && !e ? (o = !1) : !i[1] || ("" !== o && o !== se(n)) || (o = !0));
      }
      return o;
    }
    function eo(e, t) {
      const n = t.propsCache,
        o = n.get(e);
      if (o) return o;
      const r = e.props,
        l = {},
        i = [];
      let s = !1;
      if (!r && !s) return n.set(e, j), j;
      if (D(r))
        for (let e = 0; e < r.length; e++) {
          const t = le(r[e]);
          to(t) && (l[t] = T);
        }
      else if (r)
        for (const e in r) {
          const t = le(e);
          if (to(t)) {
            const n = r[e],
              o = (l[t] = D(n) || Z(n) ? { type: n } : n);
            if (o) {
              const e = ro(Boolean, o.type),
                n = ro(String, o.type);
              (o[0] = e > -1), (o[1] = n < 0 || e < n), (e > -1 || B(o, "default")) && i.push(t);
            }
          }
        }
      const a = [l, i];
      return n.set(e, a), a;
    }
    function to(e) {
      return "$" !== e[0];
    }
    function no(e) {
      const t = e && e.toString().match(/^\s*function (\w+)/);
      return t ? t[1] : null === e ? "null" : "";
    }
    function oo(e, t) {
      return no(e) === no(t);
    }
    function ro(e, t) {
      return D(t) ? t.findIndex(t => oo(t, e)) : Z(t) && oo(t, e) ? 0 : -1;
    }
    const lo = e => "_" === e[0] || "$stable" === e,
      io = e => (D(e) ? e.map(Ho) : [Ho(e)]),
      so = (e, t, n) => {
        if (t._n) return t;
        const o = (function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kn;
          if (!t) return e;
          if (e._n) return e;
          const n = function () {
            n._d && Eo(-1);
            const o = xn(t),
              r = e(...arguments);
            return xn(o), n._d && Eo(1), r;
          };
          return (n._n = !0), (n._c = !0), (n._d = !0), n;
        })(function () {
          return io(t(...arguments));
        }, n);
        return (o._c = !1), o;
      },
      ao = (e, t, n) => {
        const o = e._ctx;
        for (const n in e) {
          if (lo(n)) continue;
          const r = e[n];
          if (Z(r)) t[n] = so(0, r, o);
          else if (null != r) {
            const e = io(r);
            t[n] = () => e;
          }
        }
      },
      co = (e, t) => {
        const n = io(t);
        e.slots.default = () => n;
      },
      uo = (e, t) => {
        if (32 & e.vnode.shapeFlag) {
          const n = t._;
          n ? ((e.slots = Et(t)), de(t, "_", n)) : ao(t, (e.slots = {}));
        } else (e.slots = {}), t && co(e, t);
        de(e.slots, Oo, 1);
      };
    function po() {
      return {
        app: null,
        config: {
          isNativeTag: O,
          performance: !1,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
      };
    }
    let ho = 0;
    function fo(e, t) {
      return function (n) {
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Z(n) || (n = Object.assign({}, n)), null == o || K(o) || (o = null);
        const r = po(),
          l = new Set();
        let i = !1;
        const s = (r.app = {
          _uid: ho++,
          _component: n,
          _props: o,
          _container: null,
          _context: r,
          _instance: null,
          version: ur,
          get config() {
            return r.config;
          },
          set config(e) {},
          use(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
              n[o - 1] = arguments[o];
            return (
              l.has(e) ||
                (e && Z(e.install)
                  ? (l.add(e), e.install(s, ...n))
                  : Z(e) && (l.add(e), e(s, ...n))),
              s
            );
          },
          mixin: e => s,
          component: (e, t) => (t ? ((r.components[e] = t), s) : r.components[e]),
          directive: (e, t) => (t ? ((r.directives[e] = t), s) : r.directives[e]),
          mount(l, a, c) {
            if (!i) {
              const u = Fo(n, o);
              return (
                (u.appContext = r),
                a && t ? t(u, l) : e(u, l, c),
                (i = !0),
                (s._container = l),
                (l.__vue_app__ = s),
                lr(u.component) || u.component.proxy
              );
            }
          },
          unmount() {
            i && (e(null, s._container), delete s._container.__vue_app__);
          },
          provide: (e, t) => ((r.provides[e] = t), s),
        });
        return s;
      };
    }
    function go(e, t, n, o) {
      let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if (D(e)) return void e.forEach((e, l) => go(e, t && (D(t) ? t[l] : t), n, o, r));
      if (On(o) && !r) return;
      const l = 4 & o.shapeFlag ? lr(o.component) || o.component.proxy : o.el,
        i = r ? null : l,
        { i: s, r: a } = e,
        c = t && t.r,
        u = s.refs === T ? (s.refs = {}) : s.refs,
        p = s.setupState;
      if (
        (null != c &&
          c !== a &&
          (G(c) ? ((u[c] = null), B(p, c) && (p[c] = null)) : Ot(c) && (c.value = null)),
        Z(a))
      )
        Ht(a, s, 12, [i, u]);
      else {
        const t = G(a),
          o = Ot(a);
        if (t || o) {
          const s = () => {
            if (e.f) {
              const n = t ? u[a] : a.value;
              r
                ? D(n) && N(n, l)
                : D(n)
                ? n.includes(l) || n.push(l)
                : t
                ? ((u[a] = [l]), B(p, a) && (p[a] = u[a]))
                : ((a.value = [l]), e.k && (u[e.k] = a.value));
            } else
              t ? ((u[a] = i), B(p, a) && (p[a] = i)) : o && ((a.value = i), e.k && (u[e.k] = i));
          };
          i ? ((s.id = -1), mo(s, n)) : s();
        }
      }
    }
    const mo = function (e, t) {
      t && t.pendingBranch ? (D(e) ? t.effects.push(...e) : t.effects.push(e)) : pn(e, nn, tn, on);
    };
    function vo(e) {
      return (function (e, t) {
        (
          fe ||
          (fe =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : {})
        ).__VUE__ = !0;
        const {
            insert: n,
            remove: o,
            patchProp: r,
            createElement: l,
            createText: i,
            createComment: s,
            setText: a,
            setElementText: c,
            parentNode: u,
            nextSibling: p,
            setScopeId: d = $,
            cloneNode: h,
            insertStaticContent: f,
          } = e,
          g = function (e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
              s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
              a =
                arguments.length > 8 && void 0 !== arguments[8]
                  ? arguments[8]
                  : !!t.dynamicChildren;
            if (e === t) return;
            e && !$o(e, t) && ((o = G(e)), D(e, r, l, !0), (e = null)),
              -2 === t.patchFlag && ((a = !1), (t.dynamicChildren = null));
            const { type: c, ref: u, shapeFlag: p } = t;
            switch (c) {
              case xo:
                m(e, t, n, o);
                break;
              case _o:
                v(e, t, n, o);
                break;
              case So:
                null == e && y(t, n, o, i);
                break;
              case bo:
                R(e, t, n, o, r, l, i, s, a);
                break;
              default:
                1 & p
                  ? b(e, t, n, o, r, l, i, s, a)
                  : 6 & p
                  ? E(e, t, n, o, r, l, i, s, a)
                  : (64 & p || 128 & p) && c.process(e, t, n, o, r, l, i, s, a, K);
            }
            null != u && r && go(u, e && e.ref, l, t || e, !t);
          },
          m = (e, t, o, r) => {
            if (null == e) n((t.el = i(t.children)), o, r);
            else {
              const n = (t.el = e.el);
              t.children !== e.children && a(n, t.children);
            }
          },
          v = (e, t, o, r) => {
            null == e ? n((t.el = s(t.children || "")), o, r) : (t.el = e.el);
          },
          y = (e, t, n, o) => {
            [e.el, e.anchor] = f(e.children, t, n, o, e.el, e.anchor);
          },
          w = (e, t, o) => {
            let r,
              { el: l, anchor: i } = e;
            for (; l && l !== i; ) (r = p(l)), n(l, t, o), (l = r);
            n(i, t, o);
          },
          k = e => {
            let t,
              { el: n, anchor: r } = e;
            for (; n && n !== r; ) (t = p(n)), o(n), (n = t);
            o(r);
          },
          b = (e, t, n, o, r, l, i, s, a) => {
            (i = i || "svg" === t.type),
              null == e ? x(t, n, o, r, l, i, s, a) : C(e, t, r, l, i, s, a);
          },
          x = (e, t, o, i, s, a, u, p) => {
            let d, f;
            const { type: g, props: m, shapeFlag: v, transition: y, patchFlag: w, dirs: k } = e;
            if (e.el && void 0 !== h && -1 === w) d = e.el = h(e.el);
            else {
              if (
                ((d = e.el = l(e.type, a, m && m.is, m)),
                8 & v
                  ? c(d, e.children)
                  : 16 & v && S(e.children, d, null, i, s, a && "foreignObject" !== g, u, p),
                k && Bn(e, null, i, "created"),
                m)
              ) {
                for (const t in m)
                  "value" === t || ne(t) || r(d, t, null, m[t], a, e.children, i, s, Z);
                "value" in m && r(d, "value", null, m.value),
                  (f = m.onVnodeBeforeMount) && Go(f, i, e);
              }
              _(d, e, e.scopeId, u, i);
            }
            k && Bn(e, null, i, "beforeMount");
            const b = (!s || (s && !s.pendingBranch)) && y && !y.persisted;
            b && y.beforeEnter(d),
              n(d, t, o),
              ((f = m && m.onVnodeMounted) || b || k) &&
                mo(() => {
                  f && Go(f, i, e), b && y.enter(d), k && Bn(e, null, i, "mounted");
                }, s);
          },
          _ = (e, t, n, o, r) => {
            if ((n && d(e, n), o)) for (let t = 0; t < o.length; t++) d(e, o[t]);
            if (r) {
              if (t === r.subTree) {
                const t = r.vnode;
                _(e, t, t.scopeId, t.slotScopeIds, r.parent);
              }
            }
          },
          S = function (e, t, n, o, r, l, i, s) {
            for (
              let a = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
              a < e.length;
              a++
            ) {
              const c = (e[a] = s ? Wo(e[a]) : Ho(e[a]));
              g(null, c, t, n, o, r, l, i, s);
            }
          },
          C = (e, t, n, o, l, i, s) => {
            const a = (t.el = e.el);
            let { patchFlag: u, dynamicChildren: p, dirs: d } = t;
            u |= 16 & e.patchFlag;
            const h = e.props || T,
              f = t.props || T;
            let g;
            n && yo(n, !1),
              (g = f.onVnodeBeforeUpdate) && Go(g, n, t, e),
              d && Bn(t, e, n, "beforeUpdate"),
              n && yo(n, !0);
            const m = l && "foreignObject" !== t.type;
            if (
              (p ? I(e.dynamicChildren, p, a, n, o, m, i) : s || M(e, t, a, null, n, o, m, i, !1),
              u > 0)
            ) {
              if (16 & u) z(a, t, h, f, n, o, l);
              else if (
                (2 & u && h.class !== f.class && r(a, "class", null, f.class, l),
                4 & u && r(a, "style", h.style, f.style, l),
                8 & u)
              ) {
                const i = t.dynamicProps;
                for (let t = 0; t < i.length; t++) {
                  const s = i[t],
                    c = h[s],
                    u = f[s];
                  (u === c && "value" !== s) || r(a, s, c, u, l, e.children, n, o, Z);
                }
              }
              1 & u && e.children !== t.children && c(a, t.children);
            } else s || null != p || z(a, t, h, f, n, o, l);
            ((g = f.onVnodeUpdated) || d) &&
              mo(() => {
                g && Go(g, n, t, e), d && Bn(t, e, n, "updated");
              }, o);
          },
          I = (e, t, n, o, r, l, i) => {
            for (let s = 0; s < t.length; s++) {
              const a = e[s],
                c = t[s],
                p = a.el && (a.type === bo || !$o(a, c) || 70 & a.shapeFlag) ? u(a.el) : n;
              g(a, c, p, null, o, r, l, i, !0);
            }
          },
          z = (e, t, n, o, l, i, s) => {
            if (n !== o) {
              for (const a in o) {
                if (ne(a)) continue;
                const c = o[a],
                  u = n[a];
                c !== u && "value" !== a && r(e, a, u, c, s, t.children, l, i, Z);
              }
              if (n !== T)
                for (const a in n) ne(a) || a in o || r(e, a, n[a], null, s, t.children, l, i, Z);
              "value" in o && r(e, "value", n.value, o.value);
            }
          },
          R = (e, t, o, r, l, s, a, c, u) => {
            const p = (t.el = e ? e.el : i("")),
              d = (t.anchor = e ? e.anchor : i(""));
            let { patchFlag: h, dynamicChildren: f, slotScopeIds: g } = t;
            g && (c = c ? c.concat(g) : g),
              null == e
                ? (n(p, o, r), n(d, o, r), S(t.children, o, d, l, s, a, c, u))
                : h > 0 && 64 & h && f && e.dynamicChildren
                ? (I(e.dynamicChildren, f, o, l, s, a, c),
                  (null != t.key || (l && t === l.subTree)) && wo(e, t, !0))
                : M(e, t, o, d, l, s, a, c, u);
          },
          E = (e, t, n, o, r, l, i, s, a) => {
            (t.slotScopeIds = s),
              null == e
                ? 512 & t.shapeFlag
                  ? r.ctx.activate(t, n, o, i, a)
                  : A(t, n, o, r, l, i, a)
                : L(e, t, a);
          },
          A = (e, t, n, o, r, l, i) => {
            const s = (e.component = (function (e, t, n) {
              const o = e.type,
                r = (t ? t.appContext : e.appContext) || Jo,
                l = {
                  uid: Ko++,
                  vnode: e,
                  type: o,
                  parent: t,
                  appContext: r,
                  root: null,
                  next: null,
                  subTree: null,
                  effect: null,
                  update: null,
                  scope: new me(!0),
                  render: null,
                  proxy: null,
                  exposed: null,
                  exposeProxy: null,
                  withProxy: null,
                  provides: t ? t.provides : Object.create(r.provides),
                  accessCache: null,
                  renderCache: [],
                  components: null,
                  directives: null,
                  propsOptions: eo(o, r),
                  emitsOptions: yn(o, r),
                  emit: null,
                  emitted: null,
                  propsDefaults: T,
                  inheritAttrs: o.inheritAttrs,
                  ctx: T,
                  data: T,
                  props: T,
                  attrs: T,
                  slots: T,
                  refs: T,
                  setupState: T,
                  setupContext: null,
                  suspense: n,
                  suspenseId: n ? n.pendingId : 0,
                  asyncDep: null,
                  asyncResolved: !1,
                  isMounted: !1,
                  isUnmounted: !1,
                  isDeactivated: !1,
                  bc: null,
                  c: null,
                  bm: null,
                  m: null,
                  bu: null,
                  u: null,
                  um: null,
                  bum: null,
                  da: null,
                  a: null,
                  rtg: null,
                  rtc: null,
                  ec: null,
                  sp: null,
                };
              (l.ctx = { _: l }),
                (l.root = t ? t.root : l),
                (l.emit = vn.bind(null, l)),
                e.ce && e.ce(l);
              return l;
            })(e, o, r));
            if (
              (e.type.__isKeepAlive && (s.ctx.renderer = K),
              (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                tr = t;
                const { props: n, children: o } = e.vnode,
                  r = er(e);
                Qn(e, n, r, t), uo(e, o);
                const l = r ? nr(e, t) : void 0;
                tr = !1;
              })(s),
              s.asyncDep)
            ) {
              if ((r && r.registerDep(s, O), !e.el)) {
                const e = (s.subTree = Fo(_o));
                v(null, e, t, n);
              }
            } else O(s, e, t, n, r, l, i);
          },
          L = (e, t, n) => {
            const o = (t.component = e.component);
            if (
              (function (e, t, n) {
                const { props: o, children: r, component: l } = e,
                  { props: i, children: s, patchFlag: a } = t,
                  c = l.emitsOptions;
                if (t.dirs || t.transition) return !0;
                if (!(n && a >= 0))
                  return (
                    !((!r && !s) || (s && s.$stable)) || (o !== i && (o ? !i || In(o, i, c) : !!i))
                  );
                if (1024 & a) return !0;
                if (16 & a) return o ? In(o, i, c) : !!i;
                if (8 & a) {
                  const e = t.dynamicProps;
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (i[n] !== o[n] && !wn(c, n)) return !0;
                  }
                }
                return !1;
              })(e, t, n)
            ) {
              if (o.asyncDep && !o.asyncResolved) return void U(o, t, n);
              (o.next = t),
                (function (e) {
                  const t = Kt.indexOf(e);
                  t > Qt && Kt.splice(t, 1);
                })(o.update),
                o.update();
            } else (t.el = e.el), (o.vnode = t);
          },
          O = (e, t, n, o, r, l, i) => {
            const s = () => {
                if (e.isMounted) {
                  let t,
                    { next: n, bu: o, u: s, parent: a, vnode: c } = e,
                    p = n;
                  yo(e, !1),
                    n ? ((n.el = c.el), U(e, n, i)) : (n = c),
                    o && pe(o),
                    (t = n.props && n.props.onVnodeBeforeUpdate) && Go(t, a, n, c),
                    yo(e, !0);
                  const d = _n(e),
                    h = e.subTree;
                  (e.subTree = d),
                    g(h, d, u(h.el), G(h), e, r, l),
                    (n.el = d.el),
                    null === p &&
                      (function (e, t) {
                        let { vnode: n, parent: o } = e;
                        for (; o && o.subTree === n; ) ((n = o.vnode).el = t), (o = o.parent);
                      })(e, d.el),
                    s && mo(s, r),
                    (t = n.props && n.props.onVnodeUpdated) && mo(() => Go(t, a, n, c), r);
                } else {
                  let i;
                  const { el: s, props: a } = t,
                    { bm: c, m: u, parent: p } = e,
                    d = On(t);
                  if (
                    (yo(e, !1),
                    c && pe(c),
                    !d && (i = a && a.onVnodeBeforeMount) && Go(i, p, t),
                    yo(e, !0),
                    s && Y)
                  ) {
                    const n = () => {
                      (e.subTree = _n(e)), Y(s, e.subTree, e, r, null);
                    };
                    d ? t.type.__asyncLoader().then(() => !e.isUnmounted && n()) : n();
                  } else {
                    const i = (e.subTree = _n(e));
                    g(null, i, n, o, e, r, l), (t.el = i.el);
                  }
                  if ((u && mo(u, r), !d && (i = a && a.onVnodeMounted))) {
                    const e = t;
                    mo(() => Go(i, p, e), r);
                  }
                  (256 & t.shapeFlag || (p && On(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                    e.a &&
                    mo(e.a, r),
                    (e.isMounted = !0),
                    (t = n = o = null);
                }
              },
              a = (e.effect = new Ie(s, () => cn(c), e.scope)),
              c = (e.update = () => a.run());
            (c.id = e.uid), yo(e, !0), c();
          },
          U = (e, t, n) => {
            t.component = e;
            const o = e.vnode.props;
            (e.vnode = t),
              (e.next = null),
              (function (e, t, n, o) {
                const {
                    props: r,
                    attrs: l,
                    vnode: { patchFlag: i },
                  } = e,
                  s = Et(r),
                  [a] = e.propsOptions;
                let c = !1;
                if (!(o || i > 0) || 16 & i) {
                  let o;
                  Yn(e, t, r, l) && (c = !0);
                  for (const l in s)
                    (t && (B(t, l) || ((o = se(l)) !== l && B(t, o)))) ||
                      (a
                        ? !n ||
                          (void 0 === n[l] && void 0 === n[o]) ||
                          (r[l] = Xn(a, s, l, void 0, e, !0))
                        : delete r[l]);
                  if (l !== s) for (const e in l) (t && B(t, e)) || (delete l[e], (c = !0));
                } else if (8 & i) {
                  const n = e.vnode.dynamicProps;
                  for (let o = 0; o < n.length; o++) {
                    let i = n[o];
                    if (wn(e.emitsOptions, i)) continue;
                    const u = t[i];
                    if (a)
                      if (B(l, i)) u !== l[i] && ((l[i] = u), (c = !0));
                      else {
                        const t = le(i);
                        r[t] = Xn(a, s, t, u, e, !1);
                      }
                    else u !== l[i] && ((l[i] = u), (c = !0));
                  }
                }
                c && $e(e, "set", "$attrs");
              })(e, t.props, o, n),
              ((e, t, n) => {
                const { vnode: o, slots: r } = e;
                let l = !0,
                  i = T;
                if (32 & o.shapeFlag) {
                  const e = t._;
                  e
                    ? n && 1 === e
                      ? (l = !1)
                      : (F(r, t), n || 1 !== e || delete r._)
                    : ((l = !t.$stable), ao(t, r)),
                    (i = t);
                } else t && (co(e, t), (i = { default: 1 }));
                if (l) for (const e in r) lo(e) || e in i || delete r[e];
              })(e, t.children, n),
              Ae(),
              hn(void 0, e.update),
              Le();
          },
          M = function (e, t, n, o, r, l, i, s) {
            let a = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
            const u = e && e.children,
              p = e ? e.shapeFlag : 0,
              d = t.children,
              { patchFlag: h, shapeFlag: f } = t;
            if (h > 0) {
              if (128 & h) return void N(u, d, n, o, r, l, i, s, a);
              if (256 & h) return void P(u, d, n, o, r, l, i, s, a);
            }
            8 & f
              ? (16 & p && Z(u, r, l), d !== u && c(n, d))
              : 16 & p
              ? 16 & f
                ? N(u, d, n, o, r, l, i, s, a)
                : Z(u, r, l, !0)
              : (8 & p && c(n, ""), 16 & f && S(d, n, o, r, l, i, s, a));
          },
          P = (e, t, n, o, r, l, i, s, a) => {
            t = t || j;
            const c = (e = e || j).length,
              u = t.length,
              p = Math.min(c, u);
            let d;
            for (d = 0; d < p; d++) {
              const o = (t[d] = a ? Wo(t[d]) : Ho(t[d]));
              g(e[d], o, n, null, r, l, i, s, a);
            }
            c > u ? Z(e, r, l, !0, !1, p) : S(t, n, o, r, l, i, s, a, p);
          },
          N = (e, t, n, o, r, l, i, s, a) => {
            let c = 0;
            const u = t.length;
            let p = e.length - 1,
              d = u - 1;
            for (; c <= p && c <= d; ) {
              const o = e[c],
                u = (t[c] = a ? Wo(t[c]) : Ho(t[c]));
              if (!$o(o, u)) break;
              g(o, u, n, null, r, l, i, s, a), c++;
            }
            for (; c <= p && c <= d; ) {
              const o = e[p],
                c = (t[d] = a ? Wo(t[d]) : Ho(t[d]));
              if (!$o(o, c)) break;
              g(o, c, n, null, r, l, i, s, a), p--, d--;
            }
            if (c > p) {
              if (c <= d) {
                const e = d + 1,
                  p = e < u ? t[e].el : o;
                for (; c <= d; )
                  g(null, (t[c] = a ? Wo(t[c]) : Ho(t[c])), n, p, r, l, i, s, a), c++;
              }
            } else if (c > d) for (; c <= p; ) D(e[c], r, l, !0), c++;
            else {
              const h = c,
                f = c,
                m = new Map();
              for (c = f; c <= d; c++) {
                const e = (t[c] = a ? Wo(t[c]) : Ho(t[c]));
                null != e.key && m.set(e.key, c);
              }
              let v,
                y = 0;
              const w = d - f + 1;
              let k = !1,
                b = 0;
              const x = new Array(w);
              for (c = 0; c < w; c++) x[c] = 0;
              for (c = h; c <= p; c++) {
                const o = e[c];
                if (y >= w) {
                  D(o, r, l, !0);
                  continue;
                }
                let u;
                if (null != o.key) u = m.get(o.key);
                else
                  for (v = f; v <= d; v++)
                    if (0 === x[v - f] && $o(o, t[v])) {
                      u = v;
                      break;
                    }
                void 0 === u
                  ? D(o, r, l, !0)
                  : ((x[u - f] = c + 1),
                    u >= b ? (b = u) : (k = !0),
                    g(o, t[u], n, null, r, l, i, s, a),
                    y++);
              }
              const _ = k
                ? (function (e) {
                    const t = e.slice(),
                      n = [0];
                    let o, r, l, i, s;
                    const a = e.length;
                    for (o = 0; o < a; o++) {
                      const a = e[o];
                      if (0 !== a) {
                        if (((r = n[n.length - 1]), e[r] < a)) {
                          (t[o] = r), n.push(o);
                          continue;
                        }
                        for (l = 0, i = n.length - 1; l < i; )
                          (s = (l + i) >> 1), e[n[s]] < a ? (l = s + 1) : (i = s);
                        a < e[n[l]] && (l > 0 && (t[o] = n[l - 1]), (n[l] = o));
                      }
                    }
                    (l = n.length), (i = n[l - 1]);
                    for (; l-- > 0; ) (n[l] = i), (i = t[i]);
                    return n;
                  })(x)
                : j;
              for (v = _.length - 1, c = w - 1; c >= 0; c--) {
                const e = f + c,
                  p = t[e],
                  d = e + 1 < u ? t[e + 1].el : o;
                0 === x[c]
                  ? g(null, p, n, d, r, l, i, s, a)
                  : k && (v < 0 || c !== _[v] ? V(p, n, d, 2) : v--);
              }
            }
          },
          V = function (e, t, o, r) {
            let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const { el: i, type: s, transition: a, children: c, shapeFlag: u } = e;
            if (6 & u) return void V(e.component.subTree, t, o, r);
            if (128 & u) return void e.suspense.move(t, o, r);
            if (64 & u) return void s.move(e, t, o, K);
            if (s === bo) {
              n(i, t, o);
              for (let e = 0; e < c.length; e++) V(c[e], t, o, r);
              return void n(e.anchor, t, o);
            }
            if (s === So) return void w(e, t, o);
            if (2 !== r && 1 & u && a)
              if (0 === r) a.beforeEnter(i), n(i, t, o), mo(() => a.enter(i), l);
              else {
                const { leave: e, delayLeave: r, afterLeave: l } = a,
                  s = () => n(i, t, o),
                  c = () => {
                    e(i, () => {
                      s(), l && l();
                    });
                  };
                r ? r(i, s, c) : c();
              }
            else n(i, t, o);
          },
          D = function (e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            const {
              type: l,
              props: i,
              ref: s,
              children: a,
              dynamicChildren: c,
              shapeFlag: u,
              patchFlag: p,
              dirs: d,
            } = e;
            if ((null != s && go(s, null, n, e, !0), 256 & u)) return void t.ctx.deactivate(e);
            const h = 1 & u && d,
              f = !On(e);
            let g;
            if ((f && (g = i && i.onVnodeBeforeUnmount) && Go(g, t, e), 6 & u))
              q(e.component, n, o);
            else {
              if (128 & u) return void e.suspense.unmount(n, o);
              h && Bn(e, null, t, "beforeUnmount"),
                64 & u
                  ? e.type.remove(e, t, n, r, K, o)
                  : c && (l !== bo || (p > 0 && 64 & p))
                  ? Z(c, t, n, !1, !0)
                  : ((l === bo && 384 & p) || (!r && 16 & u)) && Z(a, t, n),
                o && H(e);
            }
            ((f && (g = i && i.onVnodeUnmounted)) || h) &&
              mo(() => {
                g && Go(g, t, e), h && Bn(e, null, t, "unmounted");
              }, n);
          },
          H = e => {
            const { type: t, el: n, anchor: r, transition: l } = e;
            if (t === bo) return void W(n, r);
            if (t === So) return void k(e);
            const i = () => {
              o(n), l && !l.persisted && l.afterLeave && l.afterLeave();
            };
            if (1 & e.shapeFlag && l && !l.persisted) {
              const { leave: t, delayLeave: o } = l,
                r = () => t(n, i);
              o ? o(e.el, i, r) : r();
            } else i();
          },
          W = (e, t) => {
            let n;
            for (; e !== t; ) (n = p(e)), o(e), (e = n);
            o(t);
          },
          q = (e, t, n) => {
            const { bum: o, scope: r, update: l, subTree: i, um: s } = e;
            o && pe(o),
              r.stop(),
              l && ((l.active = !1), D(i, e, t, n)),
              s && mo(s, t),
              mo(() => {
                e.isUnmounted = !0;
              }, t),
              t &&
                t.pendingBranch &&
                !t.isUnmounted &&
                e.asyncDep &&
                !e.asyncResolved &&
                e.suspenseId === t.pendingId &&
                (t.deps--, 0 === t.deps && t.resolve());
          },
          Z = function (e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            for (
              let l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
              l < e.length;
              l++
            )
              D(e[l], t, n, o, r);
          },
          G = e =>
            6 & e.shapeFlag
              ? G(e.component.subTree)
              : 128 & e.shapeFlag
              ? e.suspense.next()
              : p(e.anchor || e.el),
          J = (e, t, n) => {
            null == e
              ? t._vnode && D(t._vnode, null, null, !0)
              : g(t._vnode || null, e, t, null, null, null, n),
              fn(),
              (t._vnode = e);
          },
          K = { p: g, um: D, m: V, r: H, mt: A, mc: S, pc: M, pbc: I, n: G, o: e };
        let Q, Y;
        t && ([Q, Y] = t(K));
        return { render: J, hydrate: Q, createApp: fo(J, Q) };
      })(e);
    }
    function yo(e, t) {
      let { effect: n, update: o } = e;
      n.allowRecurse = o.allowRecurse = t;
    }
    function wo(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const o = e.children,
        r = t.children;
      if (D(o) && D(r))
        for (let e = 0; e < o.length; e++) {
          const t = o[e];
          let l = r[e];
          1 & l.shapeFlag &&
            !l.dynamicChildren &&
            ((l.patchFlag <= 0 || 32 === l.patchFlag) && ((l = r[e] = Wo(r[e])), (l.el = t.el)),
            n || wo(t, l));
        }
    }
    const ko = e => e.__isTeleport,
      bo = Symbol(void 0),
      xo = Symbol(void 0),
      _o = Symbol(void 0),
      So = Symbol(void 0),
      Co = [];
    let Io = null;
    function zo() {
      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      Co.push((Io = e ? null : []));
    }
    let Ro = 1;
    function Eo(e) {
      Ro += e;
    }
    function Ao(e) {
      return (
        (e.dynamicChildren = Ro > 0 ? Io || j : null),
        Co.pop(),
        (Io = Co[Co.length - 1] || null),
        Ro > 0 && Io && Io.push(e),
        e
      );
    }
    function Lo(e, t, n, o, r, l) {
      return Ao(Po(e, t, n, o, r, l, !0));
    }
    function To(e, t, n, o, r) {
      return Ao(Fo(e, t, n, o, r, !0));
    }
    function jo(e) {
      return !!e && !0 === e.__v_isVNode;
    }
    function $o(e, t) {
      return e.type === t.type && e.key === t.key;
    }
    const Oo = "__vInternal",
      Uo = e => {
        let { key: t } = e;
        return null != t ? t : null;
      },
      Mo = e => {
        let { ref: t, ref_key: n, ref_for: o } = e;
        return null != t ? (G(t) || Ot(t) || Z(t) ? { i: kn, r: t, k: n, f: !!o } : t) : null;
      };
    function Po(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e === bo ? 0 : 1,
        i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Uo(t),
        ref: t && Mo(t),
        scopeId: bn,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: l,
        patchFlag: o,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
      };
      return (
        s ? (qo(a, n), 128 & l && e.normalize(a)) : n && (a.shapeFlag |= G(n) ? 8 : 16),
        Ro > 0 && !i && Io && (a.patchFlag > 0 || 6 & l) && 32 !== a.patchFlag && Io.push(a),
        a
      );
    }
    const Fo = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      (e && e !== Wn) || (e = _o);
      if (jo(e)) {
        const o = Vo(e, t, !0);
        return (
          n && qo(o, n),
          Ro > 0 && !l && Io && (6 & o.shapeFlag ? (Io[Io.indexOf(e)] = o) : Io.push(o)),
          (o.patchFlag |= -2),
          o
        );
      }
      sr(e) && (e = e.__vccOpts);
      if (t) {
        t = No(t);
        let { class: e, style: n } = t;
        e && !G(e) && (t.class = z(e)),
          K(n) && (Rt(n) && !D(n) && (n = F({}, n)), (t.style = _(n)));
      }
      const i = G(e) ? 1 : zn(e) ? 128 : ko(e) ? 64 : K(e) ? 4 : Z(e) ? 2 : 0;
      return Po(e, t, n, o, r, i, l, !0);
    };
    function No(e) {
      return e ? (Rt(e) || Oo in e ? F({}, e) : e) : null;
    }
    function Vo(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const { props: o, ref: r, patchFlag: l, children: i } = e,
        s = t ? Zo(o || {}, t) : o,
        a = {
          __v_isVNode: !0,
          __v_skip: !0,
          type: e.type,
          props: s,
          key: s && Uo(s),
          ref: t && t.ref ? (n && r ? (D(r) ? r.concat(Mo(t)) : [r, Mo(t)]) : Mo(t)) : r,
          scopeId: e.scopeId,
          slotScopeIds: e.slotScopeIds,
          children: i,
          target: e.target,
          targetAnchor: e.targetAnchor,
          staticCount: e.staticCount,
          shapeFlag: e.shapeFlag,
          patchFlag: t && e.type !== bo ? (-1 === l ? 16 : 16 | l) : l,
          dynamicProps: e.dynamicProps,
          dynamicChildren: e.dynamicChildren,
          appContext: e.appContext,
          dirs: e.dirs,
          transition: e.transition,
          component: e.component,
          suspense: e.suspense,
          ssContent: e.ssContent && Vo(e.ssContent),
          ssFallback: e.ssFallback && Vo(e.ssFallback),
          el: e.el,
          anchor: e.anchor,
        };
      return a;
    }
    function Bo() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return Fo(xo, null, e, t);
    }
    function Do() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return t ? (zo(), To(_o, null, e)) : Fo(_o, null, e);
    }
    function Ho(e) {
      return null == e || "boolean" == typeof e
        ? Fo(_o)
        : D(e)
        ? Fo(bo, null, e.slice())
        : "object" == typeof e
        ? Wo(e)
        : Fo(xo, null, String(e));
    }
    function Wo(e) {
      return null === e.el || e.memo ? e : Vo(e);
    }
    function qo(e, t) {
      let n = 0;
      const { shapeFlag: o } = e;
      if (null == t) t = null;
      else if (D(t)) n = 16;
      else if ("object" == typeof t) {
        if (65 & o) {
          const n = t.default;
          return void (n && (n._c && (n._d = !1), qo(e, n()), n._c && (n._d = !0)));
        }
        {
          n = 32;
          const o = t._;
          o || Oo in t
            ? 3 === o && kn && (1 === kn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
            : (t._ctx = kn);
        }
      } else
        Z(t)
          ? ((t = { default: t, _ctx: kn }), (n = 32))
          : ((t = String(t)), 64 & o ? ((n = 16), (t = [Bo(t)])) : (n = 8));
      (e.children = t), (e.shapeFlag |= n);
    }
    function Zo() {
      const e = {};
      for (let t = 0; t < arguments.length; t++) {
        const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
        for (const t in n)
          if ("class" === t) e.class !== n.class && (e.class = z([e.class, n.class]));
          else if ("style" === t) e.style = _([e.style, n.style]);
          else if (M(t)) {
            const o = e[t],
              r = n[t];
            !r || o === r || (D(o) && o.includes(r)) || (e[t] = o ? [].concat(o, r) : r);
          } else "" !== t && (e[t] = n[t]);
      }
      return e;
    }
    function Go(e, t, n) {
      let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      Wt(e, t, 7, [n, o]);
    }
    const Jo = po();
    let Ko = 0;
    let Qo = null;
    const Yo = e => {
        (Qo = e), e.scope.on();
      },
      Xo = () => {
        Qo && Qo.scope.off(), (Qo = null);
      };
    function er(e) {
      return 4 & e.vnode.shapeFlag;
    }
    let tr = !1;
    function nr(e, t) {
      const n = e.type;
      (e.accessCache = Object.create(null)), (e.proxy = At(new Proxy(e.ctx, Kn)));
      const { setup: o } = n;
      if (o) {
        const n = (e.setupContext =
          o.length > 1
            ? (function (e) {
                const t = t => {
                  e.exposed = t || {};
                };
                let n;
                return {
                  get attrs() {
                    return (
                      n ||
                      (n = (function (e) {
                        return new Proxy(e.attrs, { get: (t, n) => (Te(e, 0, "$attrs"), t[n]) });
                      })(e))
                    );
                  },
                  slots: e.slots,
                  emit: e.emit,
                  expose: t,
                };
              })(e)
            : null);
        Yo(e), Ae();
        const r = Ht(o, e, 0, [e.props, n]);
        if ((Le(), Xo(), Q(r))) {
          if ((r.then(Xo, Xo), t))
            return r
              .then(n => {
                or(e, n, t);
              })
              .catch(t => {
                qt(t, e, 0);
              });
          e.asyncDep = r;
        } else or(e, r, t);
      } else rr(e, t);
    }
    function or(e, t, n) {
      Z(t)
        ? e.type.__ssrInlineRender
          ? (e.ssrRender = t)
          : (e.render = t)
        : K(t) && (e.setupState = Bt(t)),
        rr(e, n);
    }
    function rr(e, t, n) {
      const o = e.type;
      e.render || (e.render = o.render || $);
    }
    function lr(e) {
      if (e.exposed)
        return (
          e.exposeProxy ||
          (e.exposeProxy = new Proxy(Bt(At(e.exposed)), {
            get: (t, n) => (n in t ? t[n] : n in Jn ? Jn[n](e) : void 0),
          }))
        );
    }
    function ir(e) {
      let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return Z(e) ? e.displayName || e.name : e.name || (t && e.__name);
    }
    function sr(e) {
      return Z(e) && "__vccOpts" in e;
    }
    const ar = (e, t) =>
      (function (e, t) {
        let n,
          o,
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const l = Z(e);
        l ? ((n = e), (o = $)) : ((n = e.get), (o = e.set));
        return new Dt(n, o, l || !o, r);
      })(e, t, tr);
    function cr(e, t, n) {
      const o = arguments.length;
      return 2 === o
        ? K(t) && !D(t)
          ? jo(t)
            ? Fo(e, null, [t])
            : Fo(e, t)
          : Fo(e, null, t)
        : (o > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : 3 === o && jo(n) && (n = [n]),
          Fo(e, t, n));
    }
    const ur = "3.2.37",
      pr = "undefined" != typeof document ? document : null,
      dr = pr && pr.createElement("template"),
      hr = {
        insert: (e, t, n) => {
          t.insertBefore(e, n || null);
        },
        remove: e => {
          const t = e.parentNode;
          t && t.removeChild(e);
        },
        createElement: (e, t, n, o) => {
          const r = t
            ? pr.createElementNS("http://www.w3.org/2000/svg", e)
            : pr.createElement(e, n ? { is: n } : void 0);
          return (
            "select" === e && o && null != o.multiple && r.setAttribute("multiple", o.multiple), r
          );
        },
        createText: e => pr.createTextNode(e),
        createComment: e => pr.createComment(e),
        setText: (e, t) => {
          e.nodeValue = t;
        },
        setElementText: (e, t) => {
          e.textContent = t;
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => pr.querySelector(e),
        setScopeId(e, t) {
          e.setAttribute(t, "");
        },
        cloneNode(e) {
          const t = e.cloneNode(!0);
          return "_value" in e && (t._value = e._value), t;
        },
        insertStaticContent(e, t, n, o, r, l) {
          const i = n ? n.previousSibling : t.lastChild;
          if (r && (r === l || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n), r !== l && (r = r.nextSibling); );
          else {
            dr.innerHTML = o ? "<svg>".concat(e, "</svg>") : e;
            const r = dr.content;
            if (o) {
              const e = r.firstChild;
              for (; e.firstChild; ) r.appendChild(e.firstChild);
              r.removeChild(e);
            }
            t.insertBefore(r, n);
          }
          return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
        },
      };
    function fr(e, t, n) {
      const o = e._vtc;
      o && (t = (t ? [t, ...o] : [...o]).join(" ")),
        null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : (e.className = t);
    }
    function gr(e, t, n) {
      const o = e.style,
        r = G(n);
      if (n && !r) {
        for (const e in n) vr(o, e, n[e]);
        if (t && !G(t)) for (const e in t) null == n[e] && vr(o, e, "");
      } else {
        const l = o.display;
        r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"),
          "_vod" in e && (o.display = l);
      }
    }
    const mr = /\s*!important$/;
    function vr(e, t, n) {
      if (D(n)) n.forEach(n => vr(e, t, n));
      else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
      else {
        const o = (function (e, t) {
          const n = wr[t];
          if (n) return n;
          let o = le(t);
          if ("filter" !== o && o in e) return (wr[t] = o);
          o = ae(o);
          for (let n = 0; n < yr.length; n++) {
            const r = yr[n] + o;
            if (r in e) return (wr[t] = r);
          }
          return t;
        })(e, t);
        mr.test(n) ? e.setProperty(se(o), n.replace(mr, ""), "important") : (e[o] = n);
      }
    }
    const yr = ["Webkit", "Moz", "ms"],
      wr = {};
    const kr = "http://www.w3.org/1999/xlink";
    function br(e, t, n, o, r) {
      if (o && t.startsWith("xlink:"))
        null == n ? e.removeAttributeNS(kr, t.slice(6, t.length)) : e.setAttributeNS(kr, t, n);
      else {
        const o = b(t);
        null == n || (o && !x(n)) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
      }
    }
    function xr(e, t, n, o, r, l, i) {
      if ("innerHTML" === t || "textContent" === t)
        return o && i(o, r, l), void (e[t] = null == n ? "" : n);
      if ("value" === t && "PROGRESS" !== e.tagName && !e.tagName.includes("-")) {
        e._value = n;
        const o = null == n ? "" : n;
        return (
          (e.value === o && "OPTION" !== e.tagName) || (e.value = o),
          void (null == n && e.removeAttribute(t))
        );
      }
      let s = !1;
      if ("" === n || null == n) {
        const o = typeof e[t];
        "boolean" === o
          ? (n = x(n))
          : null == n && "string" === o
          ? ((n = ""), (s = !0))
          : "number" === o && ((n = 0), (s = !0));
      }
      try {
        e[t] = n;
      } catch (e) {}
      s && e.removeAttribute(t);
    }
    const [_r, Sr] = (() => {
      let e = Date.now,
        t = !1;
      if ("undefined" != typeof window) {
        Date.now() > document.createEvent("Event").timeStamp &&
          (e = performance.now.bind(performance));
        const n = navigator.userAgent.match(/firefox\/(\d+)/i);
        t = !!(n && Number(n[1]) <= 53);
      }
      return [e, t];
    })();
    let Cr = 0;
    const Ir = Promise.resolve(),
      zr = () => {
        Cr = 0;
      };
    function Rr(e, t, n, o) {
      e.addEventListener(t, n, o);
    }
    function Er(e, t, n, o) {
      e.removeEventListener(t, n, o);
    }
    function Ar(e, t, n, o) {
      let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const l = e._vei || (e._vei = {}),
        i = l[t];
      if (o && i) i.value = o;
      else {
        const [n, s] = Tr(t);
        if (o) {
          Rr(e, n, (l[t] = jr(o, r)), s);
        } else i && (Er(e, n, i, s), (l[t] = void 0));
      }
    }
    const Lr = /(?:Once|Passive|Capture)$/;
    function Tr(e) {
      let t;
      if (Lr.test(e)) {
        let n;
        for (t = {}; (n = e.match(Lr)); )
          (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
      }
      return [se(e.slice(2)), t];
    }
    function jr(e, t) {
      const n = e => {
        const o = e.timeStamp || _r();
        (Sr || o >= n.attached - 1) &&
          Wt(
            (function (e, t) {
              if (D(t)) {
                const n = e.stopImmediatePropagation;
                return (
                  (e.stopImmediatePropagation = () => {
                    n.call(e), (e._stopped = !0);
                  }),
                  t.map(e => t => !t._stopped && e && e(t))
                );
              }
              return t;
            })(e, n.value),
            t,
            5,
            [e]
          );
      };
      return (n.value = e), (n.attached = Cr || (Ir.then(zr), (Cr = _r()))), n;
    }
    const $r = /^on[a-z]/;
    function Or(e, t, n, o) {
      return o
        ? "innerHTML" === t || "textContent" === t || !!(t in e && $r.test(t) && Z(n))
        : "spellcheck" !== t &&
            "draggable" !== t &&
            "translate" !== t &&
            "form" !== t &&
            ("list" !== t || "INPUT" !== e.tagName) &&
            ("type" !== t || "TEXTAREA" !== e.tagName) &&
            (!$r.test(t) || !G(n)) &&
            t in e;
    }
    const Ur = e => {
      const t = e.props["onUpdate:modelValue"] || !1;
      return D(t) ? e => pe(t, e) : t;
    };
    function Mr(e) {
      e.target.composing = !0;
    }
    function Pr(e) {
      const t = e.target;
      t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
    }
    const Fr = {
        created(e, t, n) {
          let {
            modifiers: { lazy: o, trim: r, number: l },
          } = t;
          e._assign = Ur(n);
          const i = l || (n.props && "number" === n.props.type);
          Rr(e, o ? "change" : "input", t => {
            if (t.target.composing) return;
            let n = e.value;
            r && (n = n.trim()), i && (n = he(n)), e._assign(n);
          }),
            r &&
              Rr(e, "change", () => {
                e.value = e.value.trim();
              }),
            o || (Rr(e, "compositionstart", Mr), Rr(e, "compositionend", Pr), Rr(e, "change", Pr));
        },
        mounted(e, t) {
          let { value: n } = t;
          e.value = null == n ? "" : n;
        },
        beforeUpdate(e, t, n) {
          let {
            value: o,
            modifiers: { lazy: r, trim: l, number: i },
          } = t;
          if (((e._assign = Ur(n)), e.composing)) return;
          if (document.activeElement === e && "range" !== e.type) {
            if (r) return;
            if (l && e.value.trim() === o) return;
            if ((i || "number" === e.type) && he(e.value) === o) return;
          }
          const s = null == o ? "" : o;
          e.value !== s && (e.value = s);
        },
      },
      Nr = {
        deep: !0,
        created(e, t, n) {
          (e._assign = Ur(n)),
            Rr(e, "change", () => {
              const t = e._modelValue,
                n = Wr(e),
                o = e.checked,
                r = e._assign;
              if (D(t)) {
                const e = E(t, n),
                  l = -1 !== e;
                if (o && !l) r(t.concat(n));
                else if (!o && l) {
                  const n = [...t];
                  n.splice(e, 1), r(n);
                }
              } else if (W(t)) {
                const e = new Set(t);
                o ? e.add(n) : e.delete(n), r(e);
              } else r(qr(e, o));
            });
        },
        mounted: Vr,
        beforeUpdate(e, t, n) {
          (e._assign = Ur(n)), Vr(e, t, n);
        },
      };
    function Vr(e, t, n) {
      let { value: o, oldValue: r } = t;
      (e._modelValue = o),
        D(o)
          ? (e.checked = E(o, n.props.value) > -1)
          : W(o)
          ? (e.checked = o.has(n.props.value))
          : o !== r && (e.checked = R(o, qr(e, !0)));
    }
    const Br = {
        created(e, t, n) {
          let { value: o } = t;
          (e.checked = R(o, n.props.value)),
            (e._assign = Ur(n)),
            Rr(e, "change", () => {
              e._assign(Wr(e));
            });
        },
        beforeUpdate(e, t, n) {
          let { value: o, oldValue: r } = t;
          (e._assign = Ur(n)), o !== r && (e.checked = R(o, n.props.value));
        },
      },
      Dr = {
        deep: !0,
        created(e, t, n) {
          let {
            value: o,
            modifiers: { number: r },
          } = t;
          const l = W(o);
          Rr(e, "change", () => {
            const t = Array.prototype.filter
              .call(e.options, e => e.selected)
              .map(e => (r ? he(Wr(e)) : Wr(e)));
            e._assign(e.multiple ? (l ? new Set(t) : t) : t[0]);
          }),
            (e._assign = Ur(n));
        },
        mounted(e, t) {
          let { value: n } = t;
          Hr(e, n);
        },
        beforeUpdate(e, t, n) {
          e._assign = Ur(n);
        },
        updated(e, t) {
          let { value: n } = t;
          Hr(e, n);
        },
      };
    function Hr(e, t) {
      const n = e.multiple;
      if (!n || D(t) || W(t)) {
        for (let o = 0, r = e.options.length; o < r; o++) {
          const r = e.options[o],
            l = Wr(r);
          if (n) D(t) ? (r.selected = E(t, l) > -1) : (r.selected = t.has(l));
          else if (R(Wr(r), t)) return void (e.selectedIndex !== o && (e.selectedIndex = o));
        }
        n || -1 === e.selectedIndex || (e.selectedIndex = -1);
      }
    }
    function Wr(e) {
      return "_value" in e ? e._value : e.value;
    }
    function qr(e, t) {
      const n = t ? "_trueValue" : "_falseValue";
      return n in e ? e[n] : t;
    }
    const Zr = {
      created(e, t, n) {
        Gr(e, t, n, null, "created");
      },
      mounted(e, t, n) {
        Gr(e, t, n, null, "mounted");
      },
      beforeUpdate(e, t, n, o) {
        Gr(e, t, n, o, "beforeUpdate");
      },
      updated(e, t, n, o) {
        Gr(e, t, n, o, "updated");
      },
    };
    function Gr(e, t, n, o, r) {
      const l = (function (e, t) {
        switch (e) {
          case "SELECT":
            return Dr;
          case "TEXTAREA":
            return Fr;
          default:
            switch (t) {
              case "checkbox":
                return Nr;
              case "radio":
                return Br;
              default:
                return Fr;
            }
        }
      })(e.tagName, n.props && n.props.type)[r];
      l && l(e, t, n, o);
    }
    const Jr = {
      beforeMount(e, t, n) {
        let { value: o } = t,
          { transition: r } = n;
        (e._vod = "none" === e.style.display ? "" : e.style.display),
          r && o ? r.beforeEnter(e) : Kr(e, o);
      },
      mounted(e, t, n) {
        let { value: o } = t,
          { transition: r } = n;
        r && o && r.enter(e);
      },
      updated(e, t, n) {
        let { value: o, oldValue: r } = t,
          { transition: l } = n;
        !o != !r &&
          (l
            ? o
              ? (l.beforeEnter(e), Kr(e, !0), l.enter(e))
              : l.leave(e, () => {
                  Kr(e, !1);
                })
            : Kr(e, o));
      },
      beforeUnmount(e, t) {
        let { value: n } = t;
        Kr(e, n);
      },
    };
    function Kr(e, t) {
      e.style.display = t ? e._vod : "none";
    }
    const Qr = F(
      {
        patchProp: function (e, t, n, o) {
          let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = arguments.length > 5 ? arguments[5] : void 0,
            i = arguments.length > 6 ? arguments[6] : void 0,
            s = arguments.length > 7 ? arguments[7] : void 0,
            a = arguments.length > 8 ? arguments[8] : void 0;
          "class" === t
            ? fr(e, o, r)
            : "style" === t
            ? gr(e, n, o)
            : M(t)
            ? P(t) || Ar(e, t, n, o, i)
            : (
                "." === t[0]
                  ? ((t = t.slice(1)), 1)
                  : "^" === t[0]
                  ? ((t = t.slice(1)), 0)
                  : Or(e, t, o, r)
              )
            ? xr(e, t, o, l, i, s, a)
            : ("true-value" === t ? (e._trueValue = o) : "false-value" === t && (e._falseValue = o),
              br(e, t, o, r));
        },
      },
      hr
    );
    let Yr;
    function Xr() {
      return Yr || (Yr = vo(Qr));
    }
    function el(e) {
      if (G(e)) {
        return document.querySelector(e);
      }
      return e;
    }
    function tl(e) {
      return (
        !!ge &&
        ((function (e) {
          ge && ge.cleanups.push(e);
        })(e),
        !0)
      );
    }
    var nl;
    const ol = "undefined" != typeof window,
      rl = e => "string" == typeof e,
      ll = () => {};
    function il(e, t) {
      return function () {
        for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
        e(() => t.apply(this, o), { fn: t, thisArg: this, args: o });
      };
    }
    ol &&
      (null == (nl = null == window ? void 0 : window.navigator) ? void 0 : nl.userAgent) &&
      /iP(ad|hone|od)/.test(window.navigator.userAgent);
    const sl = e => e();
    function al(e) {
      let t,
        n,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const r = r => {
        const l = Nt(e),
          i = Nt(o.maxWait);
        if ((t && clearTimeout(t), l <= 0 || (void 0 !== i && i <= 0)))
          return n && (clearTimeout(n), (n = null)), r();
        i &&
          !n &&
          (n = setTimeout(() => {
            t && clearTimeout(t), (n = null), r();
          }, i)),
          (t = setTimeout(() => {
            n && clearTimeout(n), (n = null), r();
          }, l));
      };
      return r;
    }
    function cl() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sl;
      const t = Ut(!0);
      function n() {
        t.value = !1;
      }
      function o() {
        t.value = !0;
      }
      const r = function () {
        t.value && e(...arguments);
      };
      return { isActive: t, pause: n, resume: o, eventFilter: r };
    }
    function ul(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const { immediate: o = !0, immediateCallback: r = !1 } = n;
      let l = null;
      const i = Ut(!1);
      function s() {
        l && (clearInterval(l), (l = null));
      }
      function a() {
        (i.value = !1), s();
      }
      function c() {
        Nt(t) <= 0 || ((i.value = !0), r && e(), s(), (l = setInterval(e, Nt(t))));
      }
      if ((o && ol && c(), Ot(t))) {
        tl(
          Ln(t, () => {
            o && ol && c();
          })
        );
      }
      return tl(a), { isActive: i, pause: a, resume: c };
    }
    var pl = Object.getOwnPropertySymbols,
      dl = Object.prototype.hasOwnProperty,
      hl = Object.prototype.propertyIsEnumerable,
      fl = (e, t) => {
        var n = {};
        for (var o in e) dl.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && pl)
          for (var o of pl(e)) t.indexOf(o) < 0 && hl.call(e, o) && (n[o] = e[o]);
        return n;
      };
    function gl(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const o = n,
        { eventFilter: r = sl } = o,
        l = fl(o, ["eventFilter"]);
      return Ln(e, il(r, t), l);
    }
    var ml = Object.defineProperty,
      vl = Object.defineProperties,
      yl = Object.getOwnPropertyDescriptors,
      wl = Object.getOwnPropertySymbols,
      kl = Object.prototype.hasOwnProperty,
      bl = Object.prototype.propertyIsEnumerable,
      xl = (e, t, n) =>
        t in e
          ? ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n),
      _l = (e, t) => {
        for (var n in t || (t = {})) kl.call(t, n) && xl(e, n, t[n]);
        if (wl) for (var n of wl(t)) bl.call(t, n) && xl(e, n, t[n]);
        return e;
      },
      Sl = (e, t) => vl(e, yl(t)),
      Cl = (e, t) => {
        var n = {};
        for (var o in e) kl.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && wl)
          for (var o of wl(e)) t.indexOf(o) < 0 && bl.call(e, o) && (n[o] = e[o]);
        return n;
      };
    function Il(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const o = n,
        { eventFilter: r } = o,
        l = Cl(o, ["eventFilter"]),
        { eventFilter: i, pause: s, resume: a, isActive: c } = cl(r),
        u = gl(e, t, Sl(_l({}, l), { eventFilter: i }));
      return { stop: u, pause: s, resume: a, isActive: c };
    }
    function zl(e) {
      var t;
      const n = Nt(e);
      return null != (t = null == n ? void 0 : n.$el) ? t : n;
    }
    const Rl = ol ? window : void 0,
      El = ol ? window.document : void 0;
    function Al() {
      let e, t, n, o;
      for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i];
      if ((rl(l[0]) ? (([t, n, o] = l), (e = Rl)) : ([e, t, n, o] = l), !e)) return ll;
      let s = ll;
      const a = Ln(
          () => zl(e),
          e => {
            s(),
              e &&
                (e.addEventListener(t, n, o),
                (s = () => {
                  e.removeEventListener(t, n, o), (s = ll);
                }));
          },
          { immediate: !0, flush: "post" }
        ),
        c = () => {
          a(), s();
        };
      return tl(c), c;
    }
    ol && window.navigator, ol && window.location;
    const Ll =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      Tl = "__vueuse_ssr_handlers__";
    Ll[Tl] = Ll[Tl] || {};
    const jl = Ll[Tl];
    function $l(e, t) {
      return jl[e] || t;
    }
    function Ol(e) {
      return null == e
        ? "any"
        : e instanceof Set
        ? "set"
        : e instanceof Map
        ? "map"
        : e instanceof Date
        ? "date"
        : "boolean" == typeof e
        ? "boolean"
        : "string" == typeof e
        ? "string"
        : "object" == typeof e || Array.isArray(e)
        ? "object"
        : Number.isNaN(e)
        ? "any"
        : "number";
    }
    const Ul = {
      boolean: { read: e => "true" === e, write: e => String(e) },
      object: { read: e => JSON.parse(e), write: e => JSON.stringify(e) },
      number: { read: e => Number.parseFloat(e), write: e => String(e) },
      any: { read: e => e, write: e => String(e) },
      string: { read: e => e, write: e => String(e) },
      map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries())),
      },
      set: { read: e => new Set(JSON.parse(e)), write: e => JSON.stringify(Array.from(e)) },
      date: { read: e => new Date(e), write: e => e.toISOString() },
    };
    function Ml(e, t, n) {
      let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      var r;
      const {
          flush: l = "pre",
          deep: i = !0,
          listenToStorageChanges: s = !0,
          writeDefaults: a = !0,
          shallow: c,
          window: u = Rl,
          eventFilter: p,
          onError: d = e => {
            console.error(e);
          },
        } = o,
        h = (c ? Mt : Ut)(t);
      if (!n)
        try {
          n = $l("getDefaultStorage", () => {
            var e;
            return null == (e = Rl) ? void 0 : e.localStorage;
          })();
        } catch (e) {
          d(e);
        }
      if (!n) return h;
      const f = Nt(t),
        g = Ol(f),
        m = null != (r = o.serializer) ? r : Ul[g],
        { pause: v, resume: y } = Il(h, () => w(h.value), { flush: l, deep: i, eventFilter: p });
      return u && s && Al(u, "storage", b), b(), h;
      function w(t) {
        try {
          null == t ? n.removeItem(e) : n.setItem(e, m.write(t));
        } catch (e) {
          d(e);
        }
      }
      function k(t) {
        if (!t || t.key === e) {
          v();
          try {
            const o = t ? t.newValue : n.getItem(e);
            return null == o
              ? (a && null !== f && n.setItem(e, m.write(f)), f)
              : "string" != typeof o
              ? o
              : m.read(o);
          } catch (e) {
            d(e);
          } finally {
            y();
          }
        }
      }
      function b(t) {
        (t && t.key !== e) || (h.value = k(t));
      }
    }
    function Pl(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { immediate: n = !0, window: o = Rl } = t,
        r = Ut(!1);
      let l = null;
      function i() {
        r.value && o && (e(), (l = o.requestAnimationFrame(i)));
      }
      function s() {
        !r.value && o && ((r.value = !0), i());
      }
      function a() {
        (r.value = !1), null != l && o && (o.cancelAnimationFrame(l), (l = null));
      }
      return n && s(), tl(a), { isActive: r, pause: a, resume: s };
    }
    var Fl,
      Nl,
      Vl = Object.defineProperty,
      Bl = Object.getOwnPropertySymbols,
      Dl = Object.prototype.hasOwnProperty,
      Hl = Object.prototype.propertyIsEnumerable,
      Wl = (e, t, n) =>
        t in e
          ? Vl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n),
      ql = (e, t) => {
        for (var n in t || (t = {})) Dl.call(t, n) && Wl(e, n, t[n]);
        if (Bl) for (var n of Bl(t)) Hl.call(t, n) && Wl(e, n, t[n]);
        return e;
      };
    ((Nl = Fl || (Fl = {})).UP = "UP"),
      (Nl.RIGHT = "RIGHT"),
      (Nl.DOWN = "DOWN"),
      (Nl.LEFT = "LEFT"),
      (Nl.NONE = "NONE");
    let Zl = 0;
    const Gl = e => {
        try {
          e = decodeURI(e);
        } catch (e) {}
        return e;
      },
      Jl = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.replace(/\/$/u, "");
      },
      Kl = e => /^(https?:)?\/\//.test(e),
      Ql = e => {
        const t = Jl(e);
        return Kl(t) ? t : "https://".concat(t);
      },
      Yl = e => (Array.isArray(e) ? e : !!e && [0, e]),
      Xl = (e, t) => ("function" == typeof e ? e : !1 !== e && t),
      ei =
        "{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",
      ti = (e, t) => {
        let n = e.toString();
        for (; n.length < t; ) n = "0" + n;
        return n;
      },
      ni = (e, t, n) => {
        if (!e) return "";
        const o =
            "string" == typeof e ? new Date(-1 !== e.indexOf(" ") ? e.replace(/-/g, "/") : e) : e,
          r = t.getTime() - o.getTime(),
          l = Math.floor(r / 864e5);
        if (0 === l) {
          const e = r % 864e5,
            t = Math.floor(e / 36e5);
          if (0 === t) {
            const t = e % 36e5,
              o = Math.floor(t / 6e4);
            if (0 === o) {
              const e = t % 6e4,
                o = Math.round(e / 1e3);
              return "".concat(o, " ").concat(n.seconds);
            }
            return "".concat(o, " ").concat(n.minutes);
          }
          return "".concat(t, " ").concat(n.hours);
        }
        return l < 0
          ? n.now
          : l < 8
          ? "".concat(l, " ").concat(n.days)
          : (e => {
              const t = ti(e.getDate(), 2),
                n = ti(e.getMonth() + 1, 2),
                o = ti(e.getFullYear(), 2);
              return "".concat(o, "-").concat(n, "-").concat(t);
            })(o);
      },
      oi = e => {
        const t = Ml("WALINE_EMOJI", {}),
          n = Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(e));
        if (n) {
          const n = t.value[e];
          if (n) return Promise.resolve(n);
        }
        return fetch("".concat(e, "/info.json"))
          .then(e => e.json())
          .then(o => {
            const r = { folder: e, ...o };
            return n && (t.value[e] = r), r;
          });
      },
      ri = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return ""
          .concat(t ? "".concat(t, "/") : "")
          .concat(n)
          .concat(e)
          .concat(o ? ".".concat(o) : "");
      },
      li = e => {
        "AbortError" !== e.name && console.error(e.message);
      },
      ii = { "Content-Type": "application/json" },
      si = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("object" == typeof e && e.errno)
          throw new TypeError(
            "Fetch ".concat(t, " failed with ").concat(e.errno, ": ").concat(e.errmsg)
          );
        return e;
      },
      ai = e => {
        let { serverURL: t, lang: n, token: o, objectId: r, ...l } = e;
        const i = { "Content-Type": "application/json", Authorization: "Bearer ".concat(o) };
        return fetch("".concat(t, "/comment/").concat(r, "?lang=").concat(n), {
          method: "PUT",
          headers: i,
          body: JSON.stringify(l),
        }).then(e => e.json());
      },
      ci = e => {
        let { serverURL: t, lang: n, paths: o, signal: r } = e;
        return fetch(
          ""
            .concat(t, "/article?path=")
            .concat(encodeURIComponent(o.join(",")), "&lang=")
            .concat(n),
          { signal: r }
        )
          .then(e => e.json())
          .then(e => si(e, "visit count"))
          .then(e => (Array.isArray(e) ? e : [e]));
      },
      ui = e => {
        let { serverURL: t, lang: n, path: o } = e;
        return fetch("".concat(t, "/article?lang=").concat(n), {
          method: "POST",
          headers: ii,
          body: JSON.stringify({ path: o }),
        })
          .then(e => e.json())
          .then(e => si(e, "visit count"));
      },
      pi = e =>
        e instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : null,
      di = e => e.type.includes("image"),
      hi = e => {
        const t = Array.from(e).find(di);
        return t ? t.getAsFile() : null;
      };
    function fi() {
      return {
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartLists: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
      };
    }
    let gi = {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
    const mi = /[&<>"']/,
      vi = /[&<>"']/g,
      yi = /[<>"']|&(?!#?\w+;)/,
      wi = /[<>"']|&(?!#?\w+;)/g,
      ki = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
      bi = e => ki[e];
    function xi(e, t) {
      if (t) {
        if (mi.test(e)) return e.replace(vi, bi);
      } else if (yi.test(e)) return e.replace(wi, bi);
      return e;
    }
    const _i = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function Si(e) {
      return e.replace(_i, (e, t) =>
        "colon" === (t = t.toLowerCase())
          ? ":"
          : "#" === t.charAt(0)
          ? "x" === t.charAt(1)
            ? String.fromCharCode(parseInt(t.substring(2), 16))
            : String.fromCharCode(+t.substring(1))
          : ""
      );
    }
    const Ci = /(^|[^\[])\^/g;
    function Ii(e, t) {
      (e = "string" == typeof e ? e : e.source), (t = t || "");
      const n = {
        replace: (t, o) => ((o = (o = o.source || o).replace(Ci, "$1")), (e = e.replace(t, o)), n),
        getRegex: () => new RegExp(e, t),
      };
      return n;
    }
    const zi = /[^\w:]/g,
      Ri = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function Ei(e, t, n) {
      if (e) {
        let e;
        try {
          e = decodeURIComponent(Si(n)).replace(zi, "").toLowerCase();
        } catch (e) {
          return null;
        }
        if (
          0 === e.indexOf("javascript:") ||
          0 === e.indexOf("vbscript:") ||
          0 === e.indexOf("data:")
        )
          return null;
      }
      t &&
        !Ri.test(n) &&
        (n = (function (e, t) {
          Ai[" " + e] || (Li.test(e) ? (Ai[" " + e] = e + "/") : (Ai[" " + e] = Mi(e, "/", !0)));
          const n = -1 === (e = Ai[" " + e]).indexOf(":");
          return "//" === t.substring(0, 2)
            ? n
              ? t
              : e.replace(Ti, "$1") + t
            : "/" === t.charAt(0)
            ? n
              ? t
              : e.replace(ji, "$1") + t
            : e + t;
        })(t, n));
      try {
        n = encodeURI(n).replace(/%25/g, "%");
      } catch (e) {
        return null;
      }
      return n;
    }
    const Ai = {},
      Li = /^[^:]+:\/*[^/]*$/,
      Ti = /^([^:]+:)[\s\S]*$/,
      ji = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    const $i = { exec: function () {} };
    function Oi(e) {
      let t,
        n,
        o = 1;
      for (; o < arguments.length; o++)
        for (n in ((t = arguments[o]), t))
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function Ui(e, t) {
      const n = e
        .replace(/\|/g, (e, t, n) => {
          let o = !1,
            r = t;
          for (; --r >= 0 && "\\" === n[r]; ) o = !o;
          return o ? "|" : " |";
        })
        .split(/ \|/);
      let o = 0;
      if (
        (n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), n.length > t)
      )
        n.splice(t);
      else for (; n.length < t; ) n.push("");
      for (; o < n.length; o++) n[o] = n[o].trim().replace(/\\\|/g, "|");
      return n;
    }
    function Mi(e, t, n) {
      const o = e.length;
      if (0 === o) return "";
      let r = 0;
      for (; r < o; ) {
        const l = e.charAt(o - r - 1);
        if (l !== t || n) {
          if (l === t || !n) break;
          r++;
        } else r++;
      }
      return e.slice(0, o - r);
    }
    function Pi(e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
        );
    }
    function Fi(e, t) {
      if (t < 1) return "";
      let n = "";
      for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
      return n + e;
    }
    function Ni(e, t, n, o) {
      const r = t.href,
        l = t.title ? xi(t.title) : null,
        i = e[1].replace(/\\([\[\]])/g, "$1");
      if ("!" !== e[0].charAt(0)) {
        o.state.inLink = !0;
        const e = {
          type: "link",
          raw: n,
          href: r,
          title: l,
          text: i,
          tokens: o.inlineTokens(i, []),
        };
        return (o.state.inLink = !1), e;
      }
      return { type: "image", raw: n, href: r, title: l, text: xi(i) };
    }
    class Vi {
      constructor(e) {
        this.options = e || gi;
      }
      space(e) {
        const t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return { type: "space", raw: t[0] };
      }
      code(e) {
        const t = this.rules.block.code.exec(e);
        if (t) {
          const e = t[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: t[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic ? e : Mi(e, "\n"),
          };
        }
      }
      fences(e) {
        const t = this.rules.block.fences.exec(e);
        if (t) {
          const e = t[0],
            n = (function (e, t) {
              const n = e.match(/^(\s+)(?:```)/);
              if (null === n) return t;
              const o = n[1];
              return t
                .split("\n")
                .map(e => {
                  const t = e.match(/^\s+/);
                  if (null === t) return e;
                  const [n] = t;
                  return n.length >= o.length ? e.slice(o.length) : e;
                })
                .join("\n");
            })(e, t[3] || "");
          return { type: "code", raw: e, lang: t[2] ? t[2].trim() : t[2], text: n };
        }
      }
      heading(e) {
        const t = this.rules.block.heading.exec(e);
        if (t) {
          let e = t[2].trim();
          if (/#$/.test(e)) {
            const t = Mi(e, "#");
            this.options.pedantic ? (e = t.trim()) : (t && !/ $/.test(t)) || (e = t.trim());
          }
          const n = { type: "heading", raw: t[0], depth: t[1].length, text: e, tokens: [] };
          return this.lexer.inline(n.text, n.tokens), n;
        }
      }
      hr(e) {
        const t = this.rules.block.hr.exec(e);
        if (t) return { type: "hr", raw: t[0] };
      }
      blockquote(e) {
        const t = this.rules.block.blockquote.exec(e);
        if (t) {
          const e = t[0].replace(/^ *>[ \t]?/gm, "");
          return { type: "blockquote", raw: t[0], tokens: this.lexer.blockTokens(e, []), text: e };
        }
      }
      list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
          let n,
            o,
            r,
            l,
            i,
            s,
            a,
            c,
            u,
            p,
            d,
            h,
            f = t[1].trim();
          const g = f.length > 1,
            m = {
              type: "list",
              raw: "",
              ordered: g,
              start: g ? +f.slice(0, -1) : "",
              loose: !1,
              items: [],
            };
          (f = g ? "\\d{1,9}\\".concat(f.slice(-1)) : "\\".concat(f)),
            this.options.pedantic && (f = g ? f : "[*+-]");
          const v = new RegExp("^( {0,3}".concat(f, ")((?:[\t ][^\\n]*)?(?:\\n|$))"));
          for (; e && ((h = !1), (t = v.exec(e))) && !this.rules.block.hr.test(e); ) {
            if (
              ((n = t[0]),
              (e = e.substring(n.length)),
              (c = t[2].split("\n", 1)[0]),
              (u = e.split("\n", 1)[0]),
              this.options.pedantic
                ? ((l = 2), (d = c.trimLeft()))
                : ((l = t[2].search(/[^ ]/)),
                  (l = l > 4 ? 1 : l),
                  (d = c.slice(l)),
                  (l += t[1].length)),
              (s = !1),
              !c && /^ *$/.test(u) && ((n += u + "\n"), (e = e.substring(u.length + 1)), (h = !0)),
              !h)
            ) {
              const t = new RegExp(
                  "^ {0,".concat(
                    Math.min(3, l - 1),
                    "}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"
                  )
                ),
                o = new RegExp(
                  "^ {0,".concat(
                    Math.min(3, l - 1),
                    "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"
                  )
                ),
                r = new RegExp("^( {0,".concat(Math.min(3, l - 1), "})(```|~~~)"));
              for (
                ;
                e &&
                ((p = e.split("\n", 1)[0]),
                (c = p),
                this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                !r.test(c)) &&
                !this.rules.block.heading.test(c) &&
                !t.test(c) &&
                !o.test(e);

              ) {
                if (c.search(/[^ ]/) >= l || !c.trim()) d += "\n" + c.slice(l);
                else {
                  if (s) break;
                  d += "\n" + c;
                }
                s || c.trim() || (s = !0), (n += p + "\n"), (e = e.substring(p.length + 1));
              }
            }
            m.loose || (a ? (m.loose = !0) : /\n *\n *$/.test(n) && (a = !0)),
              this.options.gfm &&
                ((o = /^\[[ xX]\] /.exec(d)),
                o && ((r = "[ ] " !== o[0]), (d = d.replace(/^\[[ xX]\] +/, "")))),
              m.items.push({
                type: "list_item",
                raw: n,
                task: !!o,
                checked: r,
                loose: !1,
                text: d,
              }),
              (m.raw += n);
          }
          (m.items[m.items.length - 1].raw = n.trimRight()),
            (m.items[m.items.length - 1].text = d.trimRight()),
            (m.raw = m.raw.trimRight());
          const y = m.items.length;
          for (i = 0; i < y; i++) {
            (this.lexer.state.top = !1),
              (m.items[i].tokens = this.lexer.blockTokens(m.items[i].text, []));
            const e = m.items[i].tokens.filter(e => "space" === e.type),
              t = e.every(e => {
                const t = e.raw.split("");
                let n = 0;
                for (const e of t) if (("\n" === e && (n += 1), n > 1)) return !0;
                return !1;
              });
            !m.loose && e.length && t && ((m.loose = !0), (m.items[i].loose = !0));
          }
          return m;
        }
      }
      html(e) {
        const t = this.rules.block.html.exec(e);
        if (t) {
          const e = {
            type: "html",
            raw: t[0],
            pre:
              !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
            text: t[0],
          };
          return (
            this.options.sanitize &&
              ((e.type = "paragraph"),
              (e.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : xi(t[0])),
              (e.tokens = []),
              this.lexer.inline(e.text, e.tokens)),
            e
          );
        }
      }
      def(e) {
        const t = this.rules.block.def.exec(e);
        if (t) {
          t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
          return {
            type: "def",
            tag: t[1].toLowerCase().replace(/\s+/g, " "),
            raw: t[0],
            href: t[2],
            title: t[3],
          };
        }
      }
      table(e) {
        const t = this.rules.block.table.exec(e);
        if (t) {
          const e = {
            type: "table",
            header: Ui(t[1]).map(e => ({ text: e })),
            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : [],
          };
          if (e.header.length === e.align.length) {
            e.raw = t[0];
            let n,
              o,
              r,
              l,
              i = e.align.length;
            for (n = 0; n < i; n++)
              /^ *-+: *$/.test(e.align[n])
                ? (e.align[n] = "right")
                : /^ *:-+: *$/.test(e.align[n])
                ? (e.align[n] = "center")
                : /^ *:-+ *$/.test(e.align[n])
                ? (e.align[n] = "left")
                : (e.align[n] = null);
            for (i = e.rows.length, n = 0; n < i; n++)
              e.rows[n] = Ui(e.rows[n], e.header.length).map(e => ({ text: e }));
            for (i = e.header.length, o = 0; o < i; o++)
              (e.header[o].tokens = []), this.lexer.inline(e.header[o].text, e.header[o].tokens);
            for (i = e.rows.length, o = 0; o < i; o++)
              for (l = e.rows[o], r = 0; r < l.length; r++)
                (l[r].tokens = []), this.lexer.inline(l[r].text, l[r].tokens);
            return e;
          }
        }
      }
      lheading(e) {
        const t = this.rules.block.lheading.exec(e);
        if (t) {
          const e = {
            type: "heading",
            raw: t[0],
            depth: "=" === t[2].charAt(0) ? 1 : 2,
            text: t[1],
            tokens: [],
          };
          return this.lexer.inline(e.text, e.tokens), e;
        }
      }
      paragraph(e) {
        const t = this.rules.block.paragraph.exec(e);
        if (t) {
          const e = {
            type: "paragraph",
            raw: t[0],
            text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
            tokens: [],
          };
          return this.lexer.inline(e.text, e.tokens), e;
        }
      }
      text(e) {
        const t = this.rules.block.text.exec(e);
        if (t) {
          const e = { type: "text", raw: t[0], text: t[0], tokens: [] };
          return this.lexer.inline(e.text, e.tokens), e;
        }
      }
      escape(e) {
        const t = this.rules.inline.escape.exec(e);
        if (t) return { type: "escape", raw: t[0], text: xi(t[1]) };
      }
      tag(e) {
        const t = this.rules.inline.tag.exec(e);
        if (t)
          return (
            !this.lexer.state.inLink && /^<a /i.test(t[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: this.options.sanitize ? "text" : "html",
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : xi(t[0])
                : t[0],
            }
          );
      }
      link(e) {
        const t = this.rules.inline.link.exec(e);
        if (t) {
          const e = t[2].trim();
          if (!this.options.pedantic && /^</.test(e)) {
            if (!/>$/.test(e)) return;
            const t = Mi(e.slice(0, -1), "\\");
            if ((e.length - t.length) % 2 == 0) return;
          } else {
            const e = (function (e, t) {
              if (-1 === e.indexOf(t[1])) return -1;
              const n = e.length;
              let o = 0,
                r = 0;
              for (; r < n; r++)
                if ("\\" === e[r]) r++;
                else if (e[r] === t[0]) o++;
                else if (e[r] === t[1] && (o--, o < 0)) return r;
              return -1;
            })(t[2], "()");
            if (e > -1) {
              const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
              (t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, n).trim()), (t[3] = "");
            }
          }
          let n = t[2],
            o = "";
          if (this.options.pedantic) {
            const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
            e && ((n = e[1]), (o = e[3]));
          } else o = t[3] ? t[3].slice(1, -1) : "";
          return (
            (n = n.trim()),
            /^</.test(n) &&
              (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)),
            Ni(
              t,
              {
                href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
                title: o ? o.replace(this.rules.inline._escapes, "$1") : o,
              },
              t[0],
              this.lexer
            )
          );
        }
      }
      reflink(e, t) {
        let n;
        if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
          let e = (n[2] || n[1]).replace(/\s+/g, " ");
          if (((e = t[e.toLowerCase()]), !e || !e.href)) {
            const e = n[0].charAt(0);
            return { type: "text", raw: e, text: e };
          }
          return Ni(n, e, n[0], this.lexer);
        }
      }
      emStrong(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          o = this.rules.inline.emStrong.lDelim.exec(e);
        if (!o) return;
        if (o[3] && n.match(/[\p{L}\p{N}]/u)) return;
        const r = o[1] || o[2] || "";
        if (!r || (r && ("" === n || this.rules.inline.punctuation.exec(n)))) {
          const n = o[0].length - 1;
          let r,
            l,
            i = n,
            s = 0;
          const a =
            "*" === o[0][0]
              ? this.rules.inline.emStrong.rDelimAst
              : this.rules.inline.emStrong.rDelimUnd;
          for (a.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (o = a.exec(t)); ) {
            if (((r = o[1] || o[2] || o[3] || o[4] || o[5] || o[6]), !r)) continue;
            if (((l = r.length), o[3] || o[4])) {
              i += l;
              continue;
            }
            if ((o[5] || o[6]) && n % 3 && !((n + l) % 3)) {
              s += l;
              continue;
            }
            if (((i -= l), i > 0)) continue;
            if (((l = Math.min(l, l + i + s)), Math.min(n, l) % 2)) {
              const t = e.slice(1, n + o.index + l);
              return {
                type: "em",
                raw: e.slice(0, n + o.index + l + 1),
                text: t,
                tokens: this.lexer.inlineTokens(t, []),
              };
            }
            const t = e.slice(2, n + o.index + l - 1);
            return {
              type: "strong",
              raw: e.slice(0, n + o.index + l + 1),
              text: t,
              tokens: this.lexer.inlineTokens(t, []),
            };
          }
        }
      }
      codespan(e) {
        const t = this.rules.inline.code.exec(e);
        if (t) {
          let e = t[2].replace(/\n/g, " ");
          const n = /[^ ]/.test(e),
            o = /^ /.test(e) && / $/.test(e);
          return (
            n && o && (e = e.substring(1, e.length - 1)),
            (e = xi(e, !0)),
            { type: "codespan", raw: t[0], text: e }
          );
        }
      }
      br(e) {
        const t = this.rules.inline.br.exec(e);
        if (t) return { type: "br", raw: t[0] };
      }
      del(e) {
        const t = this.rules.inline.del.exec(e);
        if (t)
          return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2], []) };
      }
      autolink(e, t) {
        const n = this.rules.inline.autolink.exec(e);
        if (n) {
          let e, o;
          return (
            "@" === n[2]
              ? ((e = xi(this.options.mangle ? t(n[1]) : n[1])), (o = "mailto:" + e))
              : ((e = xi(n[1])), (o = e)),
            {
              type: "link",
              raw: n[0],
              text: e,
              href: o,
              tokens: [{ type: "text", raw: e, text: e }],
            }
          );
        }
      }
      url(e, t) {
        let n;
        if ((n = this.rules.inline.url.exec(e))) {
          let e, o;
          if ("@" === n[2]) (e = xi(this.options.mangle ? t(n[0]) : n[0])), (o = "mailto:" + e);
          else {
            let t;
            do {
              (t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
            } while (t !== n[0]);
            (e = xi(n[0])), (o = "www." === n[1] ? "http://" + e : e);
          }
          return {
            type: "link",
            raw: n[0],
            text: e,
            href: o,
            tokens: [{ type: "text", raw: e, text: e }],
          };
        }
      }
      inlineText(e, t) {
        const n = this.rules.inline.text.exec(e);
        if (n) {
          let e;
          return (
            (e = this.lexer.state.inRawBlock
              ? this.options.sanitize
                ? this.options.sanitizer
                  ? this.options.sanitizer(n[0])
                  : xi(n[0])
                : n[0]
              : xi(this.options.smartypants ? t(n[0]) : n[0])),
            { type: "text", raw: n[0], text: e }
          );
        }
      }
    }
    const Bi = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: $i,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
    (Bi.def = Ii(Bi.def).replace("label", Bi._label).replace("title", Bi._title).getRegex()),
      (Bi.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      (Bi.listItemStart = Ii(/^( *)(bull) */)
        .replace("bull", Bi.bullet)
        .getRegex()),
      (Bi.list = Ii(Bi.list)
        .replace(/bull/g, Bi.bullet)
        .replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")
        .replace("def", "\\n+(?=" + Bi.def.source + ")")
        .getRegex()),
      (Bi._tag =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
      (Bi._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      (Bi.html = Ii(Bi.html, "i")
        .replace("comment", Bi._comment)
        .replace("tag", Bi._tag)
        .replace(
          "attribute",
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex()),
      (Bi.paragraph = Ii(Bi._paragraph)
        .replace("hr", Bi.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("|table", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", Bi._tag)
        .getRegex()),
      (Bi.blockquote = Ii(Bi.blockquote).replace("paragraph", Bi.paragraph).getRegex()),
      (Bi.normal = Oi({}, Bi)),
      (Bi.gfm = Oi({}, Bi.normal, {
        table:
          "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
      })),
      (Bi.gfm.table = Ii(Bi.gfm.table)
        .replace("hr", Bi.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("blockquote", " {0,3}>")
        .replace("code", " {4}[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", Bi._tag)
        .getRegex()),
      (Bi.gfm.paragraph = Ii(Bi._paragraph)
        .replace("hr", Bi.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("table", Bi.gfm.table)
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)")
        .replace("tag", Bi._tag)
        .getRegex()),
      (Bi.pedantic = Oi({}, Bi.normal, {
        html: Ii(
          "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
        )
          .replace("comment", Bi._comment)
          .replace(
            /tag/g,
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: $i,
        paragraph: Ii(Bi.normal._paragraph)
          .replace("hr", Bi.hr)
          .replace("heading", " *#{1,6} *[^\n]")
          .replace("lheading", Bi.lheading)
          .replace("blockquote", " {0,3}>")
          .replace("|fences", "")
          .replace("|list", "")
          .replace("|html", "")
          .getRegex(),
      }));
    const Di = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: $i,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst:
          /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
        rDelimUnd:
          /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: $i,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/,
    };
    function Hi(e) {
      return e
        .replace(/---/g, "—")
        .replace(/--/g, "–")
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
        .replace(/'/g, "’")
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
        .replace(/"/g, "”")
        .replace(/\.{3}/g, "…");
    }
    function Wi(e) {
      let t,
        n,
        o = "";
      const r = e.length;
      for (t = 0; t < r; t++)
        (n = e.charCodeAt(t)),
          Math.random() > 0.5 && (n = "x" + n.toString(16)),
          (o += "&#" + n + ";");
      return o;
    }
    (Di._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
      (Di.punctuation = Ii(Di.punctuation)
        .replace(/punctuation/g, Di._punctuation)
        .getRegex()),
      (Di.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
      (Di.escapedEmSt = /\\\*|\\_/g),
      (Di._comment = Ii(Bi._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
      (Di.emStrong.lDelim = Ii(Di.emStrong.lDelim).replace(/punct/g, Di._punctuation).getRegex()),
      (Di.emStrong.rDelimAst = Ii(Di.emStrong.rDelimAst, "g")
        .replace(/punct/g, Di._punctuation)
        .getRegex()),
      (Di.emStrong.rDelimUnd = Ii(Di.emStrong.rDelimUnd, "g")
        .replace(/punct/g, Di._punctuation)
        .getRegex()),
      (Di._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (Di._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (Di._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (Di.autolink = Ii(Di.autolink)
        .replace("scheme", Di._scheme)
        .replace("email", Di._email)
        .getRegex()),
      (Di._attribute =
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (Di.tag = Ii(Di.tag)
        .replace("comment", Di._comment)
        .replace("attribute", Di._attribute)
        .getRegex()),
      (Di._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (Di._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
      (Di._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (Di.link = Ii(Di.link)
        .replace("label", Di._label)
        .replace("href", Di._href)
        .replace("title", Di._title)
        .getRegex()),
      (Di.reflink = Ii(Di.reflink)
        .replace("label", Di._label)
        .replace("ref", Bi._label)
        .getRegex()),
      (Di.nolink = Ii(Di.nolink).replace("ref", Bi._label).getRegex()),
      (Di.reflinkSearch = Ii(Di.reflinkSearch, "g")
        .replace("reflink", Di.reflink)
        .replace("nolink", Di.nolink)
        .getRegex()),
      (Di.normal = Oi({}, Di)),
      (Di.pedantic = Oi({}, Di.normal, {
        strong: {
          start: /^__|\*\*/,
          middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: Ii(/^!?\[(label)\]\((.*?)\)/)
          .replace("label", Di._label)
          .getRegex(),
        reflink: Ii(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace("label", Di._label)
          .getRegex(),
      })),
      (Di.gfm = Oi({}, Di.normal, {
        escape: Ii(Di.escape).replace("])", "~|])").getRegex(),
        _extended_email:
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      })),
      (Di.gfm.url = Ii(Di.gfm.url, "i").replace("email", Di.gfm._extended_email).getRegex()),
      (Di.breaks = Oi({}, Di.gfm, {
        br: Ii(Di.br).replace("{2,}", "*").getRegex(),
        text: Ii(Di.gfm.text)
          .replace("\\b_", "\\b_| {2,}\\n")
          .replace(/\{2,\}/g, "*")
          .getRegex(),
      }));
    class qi {
      constructor(e) {
        (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || gi),
          (this.options.tokenizer = this.options.tokenizer || new Vi()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        const t = { block: Bi.normal, inline: Di.normal };
        this.options.pedantic
          ? ((t.block = Bi.pedantic), (t.inline = Di.pedantic))
          : this.options.gfm &&
            ((t.block = Bi.gfm),
            this.options.breaks ? (t.inline = Di.breaks) : (t.inline = Di.gfm)),
          (this.tokenizer.rules = t);
      }
      static get rules() {
        return { block: Bi, inline: Di };
      }
      static lex(e, t) {
        return new qi(t).lex(e);
      }
      static lexInline(e, t) {
        return new qi(t).inlineTokens(e);
      }
      lex(e) {
        let t;
        for (
          e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens);
          (t = this.inlineQueue.shift());

        )
          this.inlineTokens(t.src, t.tokens);
        return this.tokens;
      }
      blockTokens(e) {
        let t,
          n,
          o,
          r,
          l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (
          e = this.options.pedantic
            ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
            : e.replace(/^( *)(\t+)/gm, (e, t, n) => t + "    ".repeat(n.length));
          e;

        )
          if (
            !(
              this.options.extensions &&
              this.options.extensions.block &&
              this.options.extensions.block.some(
                n =>
                  !!(t = n.call({ lexer: this }, e, l)) &&
                  ((e = e.substring(t.raw.length)), l.push(t), !0)
              )
            )
          )
            if ((t = this.tokenizer.space(e)))
              (e = e.substring(t.raw.length)),
                1 === t.raw.length && l.length > 0 ? (l[l.length - 1].raw += "\n") : l.push(t);
            else if ((t = this.tokenizer.code(e)))
              (e = e.substring(t.raw.length)),
                (n = l[l.length - 1]),
                !n || ("paragraph" !== n.type && "text" !== n.type)
                  ? l.push(t)
                  : ((n.raw += "\n" + t.raw),
                    (n.text += "\n" + t.text),
                    (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
            else if ((t = this.tokenizer.fences(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.heading(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.hr(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.blockquote(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.list(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.html(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.def(e)))
              (e = e.substring(t.raw.length)),
                (n = l[l.length - 1]),
                !n || ("paragraph" !== n.type && "text" !== n.type)
                  ? this.tokens.links[t.tag] ||
                    (this.tokens.links[t.tag] = { href: t.href, title: t.title })
                  : ((n.raw += "\n" + t.raw),
                    (n.text += "\n" + t.raw),
                    (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
            else if ((t = this.tokenizer.table(e))) (e = e.substring(t.raw.length)), l.push(t);
            else if ((t = this.tokenizer.lheading(e))) (e = e.substring(t.raw.length)), l.push(t);
            else {
              if (((o = e), this.options.extensions && this.options.extensions.startBlock)) {
                let t = 1 / 0;
                const n = e.slice(1);
                let r;
                this.options.extensions.startBlock.forEach(function (e) {
                  (r = e.call({ lexer: this }, n)),
                    "number" == typeof r && r >= 0 && (t = Math.min(t, r));
                }),
                  t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
              }
              if (this.state.top && (t = this.tokenizer.paragraph(o)))
                (n = l[l.length - 1]),
                  r && "paragraph" === n.type
                    ? ((n.raw += "\n" + t.raw),
                      (n.text += "\n" + t.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
                    : l.push(t),
                  (r = o.length !== e.length),
                  (e = e.substring(t.raw.length));
              else if ((t = this.tokenizer.text(e)))
                (e = e.substring(t.raw.length)),
                  (n = l[l.length - 1]),
                  n && "text" === n.type
                    ? ((n.raw += "\n" + t.raw),
                      (n.text += "\n" + t.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
                    : l.push(t);
              else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw new Error(t);
              }
            }
        return (this.state.top = !0), l;
      }
      inline(e, t) {
        this.inlineQueue.push({ src: e, tokens: t });
      }
      inlineTokens(e) {
        let t,
          n,
          o,
          r,
          l,
          i,
          s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          a = e;
        if (this.tokens.links) {
          const e = Object.keys(this.tokens.links);
          if (e.length > 0)
            for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(a)); )
              e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) &&
                (a =
                  a.slice(0, r.index) +
                  "[" +
                  Fi("a", r[0].length - 2) +
                  "]" +
                  a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(a)); )
          a =
            a.slice(0, r.index) +
            "[" +
            Fi("a", r[0].length - 2) +
            "]" +
            a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (r = this.tokenizer.rules.inline.escapedEmSt.exec(a)); )
          a =
            a.slice(0, r.index) + "++" + a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        for (; e; )
          if (
            (l || (i = ""),
            (l = !1),
            !(
              this.options.extensions &&
              this.options.extensions.inline &&
              this.options.extensions.inline.some(
                n =>
                  !!(t = n.call({ lexer: this }, e, s)) &&
                  ((e = e.substring(t.raw.length)), s.push(t), !0)
              )
            ))
          )
            if ((t = this.tokenizer.escape(e))) (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.tag(e)))
              (e = e.substring(t.raw.length)),
                (n = s[s.length - 1]),
                n && "text" === t.type && "text" === n.type
                  ? ((n.raw += t.raw), (n.text += t.text))
                  : s.push(t);
            else if ((t = this.tokenizer.link(e))) (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.reflink(e, this.tokens.links)))
              (e = e.substring(t.raw.length)),
                (n = s[s.length - 1]),
                n && "text" === t.type && "text" === n.type
                  ? ((n.raw += t.raw), (n.text += t.text))
                  : s.push(t);
            else if ((t = this.tokenizer.emStrong(e, a, i)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.codespan(e))) (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.br(e))) (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.del(e))) (e = e.substring(t.raw.length)), s.push(t);
            else if ((t = this.tokenizer.autolink(e, Wi)))
              (e = e.substring(t.raw.length)), s.push(t);
            else if (this.state.inLink || !(t = this.tokenizer.url(e, Wi))) {
              if (((o = e), this.options.extensions && this.options.extensions.startInline)) {
                let t = 1 / 0;
                const n = e.slice(1);
                let r;
                this.options.extensions.startInline.forEach(function (e) {
                  (r = e.call({ lexer: this }, n)),
                    "number" == typeof r && r >= 0 && (t = Math.min(t, r));
                }),
                  t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
              }
              if ((t = this.tokenizer.inlineText(o, Hi)))
                (e = e.substring(t.raw.length)),
                  "_" !== t.raw.slice(-1) && (i = t.raw.slice(-1)),
                  (l = !0),
                  (n = s[s.length - 1]),
                  n && "text" === n.type ? ((n.raw += t.raw), (n.text += t.text)) : s.push(t);
              else if (e) {
                const t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw new Error(t);
              }
            } else (e = e.substring(t.raw.length)), s.push(t);
        return s;
      }
    }
    class Zi {
      constructor(e) {
        this.options = e || gi;
      }
      code(e, t, n) {
        const o = (t || "").match(/\S*/)[0];
        if (this.options.highlight) {
          const t = this.options.highlight(e, o);
          null != t && t !== e && ((n = !0), (e = t));
        }
        return (
          (e = e.replace(/\n$/, "") + "\n"),
          o
            ? '<pre><code class="' +
              this.options.langPrefix +
              xi(o, !0) +
              '">' +
              (n ? e : xi(e, !0)) +
              "</code></pre>\n"
            : "<pre><code>" + (n ? e : xi(e, !0)) + "</code></pre>\n"
        );
      }
      blockquote(e) {
        return "<blockquote>\n".concat(e, "</blockquote>\n");
      }
      html(e) {
        return e;
      }
      heading(e, t, n, o) {
        if (this.options.headerIds) {
          const r = this.options.headerPrefix + o.slug(n);
          return "<h".concat(t, ' id="').concat(r, '">').concat(e, "</h").concat(t, ">\n");
        }
        return "<h".concat(t, ">").concat(e, "</h").concat(t, ">\n");
      }
      hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }
      list(e, t, n) {
        const o = t ? "ol" : "ul";
        return "<" + o + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + o + ">\n";
      }
      listitem(e) {
        return "<li>".concat(e, "</li>\n");
      }
      checkbox(e) {
        return (
          "<input " +
          (e ? 'checked="" ' : "") +
          'disabled="" type="checkbox"' +
          (this.options.xhtml ? " /" : "") +
          "> "
        );
      }
      paragraph(e) {
        return "<p>".concat(e, "</p>\n");
      }
      table(e, t) {
        return (
          t && (t = "<tbody>".concat(t, "</tbody>")),
          "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
        );
      }
      tablerow(e) {
        return "<tr>\n".concat(e, "</tr>\n");
      }
      tablecell(e, t) {
        const n = t.header ? "th" : "td";
        return (
          (t.align ? "<".concat(n, ' align="').concat(t.align, '">') : "<".concat(n, ">")) +
          e +
          "</".concat(n, ">\n")
        );
      }
      strong(e) {
        return "<strong>".concat(e, "</strong>");
      }
      em(e) {
        return "<em>".concat(e, "</em>");
      }
      codespan(e) {
        return "<code>".concat(e, "</code>");
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }
      del(e) {
        return "<del>".concat(e, "</del>");
      }
      link(e, t, n) {
        if (null === (e = Ei(this.options.sanitize, this.options.baseUrl, e))) return n;
        let o = '<a href="' + xi(e) + '"';
        return t && (o += ' title="' + t + '"'), (o += ">" + n + "</a>"), o;
      }
      image(e, t, n) {
        if (null === (e = Ei(this.options.sanitize, this.options.baseUrl, e))) return n;
        let o = '<img src="'.concat(e, '" alt="').concat(n, '"');
        return t && (o += ' title="'.concat(t, '"')), (o += this.options.xhtml ? "/>" : ">"), o;
      }
      text(e) {
        return e;
      }
    }
    class Gi {
      strong(e) {
        return e;
      }
      em(e) {
        return e;
      }
      codespan(e) {
        return e;
      }
      del(e) {
        return e;
      }
      html(e) {
        return e;
      }
      text(e) {
        return e;
      }
      link(e, t, n) {
        return "" + n;
      }
      image(e, t, n) {
        return "" + n;
      }
      br() {
        return "";
      }
    }
    class Ji {
      constructor() {
        this.seen = {};
      }
      serialize(e) {
        return e
          .toLowerCase()
          .trim()
          .replace(/<[!\/a-z].*?>/gi, "")
          .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
          .replace(/\s/g, "-");
      }
      getNextSafeSlug(e, t) {
        let n = e,
          o = 0;
        if (this.seen.hasOwnProperty(n)) {
          o = this.seen[e];
          do {
            o++, (n = e + "-" + o);
          } while (this.seen.hasOwnProperty(n));
        }
        return t || ((this.seen[e] = o), (this.seen[n] = 0)), n;
      }
      slug(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const n = this.serialize(e);
        return this.getNextSafeSlug(n, t.dryrun);
      }
    }
    class Ki {
      constructor(e) {
        (this.options = e || gi),
          (this.options.renderer = this.options.renderer || new Zi()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new Gi()),
          (this.slugger = new Ji());
      }
      static parse(e, t) {
        return new Ki(t).parse(e);
      }
      static parseInline(e, t) {
        return new Ki(t).parseInline(e);
      }
      parse(e) {
        let t,
          n,
          o,
          r,
          l,
          i,
          s,
          a,
          c,
          u,
          p,
          d,
          h,
          f,
          g,
          m,
          v,
          y,
          w,
          k = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          b = "";
        const x = e.length;
        for (t = 0; t < x; t++)
          if (
            ((u = e[t]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[u.type] &&
              ((w = this.options.extensions.renderers[u.type].call({ parser: this }, u)),
              !1 !== w ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(u.type)))
          )
            b += w || "";
          else
            switch (u.type) {
              case "space":
                continue;
              case "hr":
                b += this.renderer.hr();
                continue;
              case "heading":
                b += this.renderer.heading(
                  this.parseInline(u.tokens),
                  u.depth,
                  Si(this.parseInline(u.tokens, this.textRenderer)),
                  this.slugger
                );
                continue;
              case "code":
                b += this.renderer.code(u.text, u.lang, u.escaped);
                continue;
              case "table":
                for (a = "", s = "", r = u.header.length, n = 0; n < r; n++)
                  s += this.renderer.tablecell(this.parseInline(u.header[n].tokens), {
                    header: !0,
                    align: u.align[n],
                  });
                for (a += this.renderer.tablerow(s), c = "", r = u.rows.length, n = 0; n < r; n++) {
                  for (i = u.rows[n], s = "", l = i.length, o = 0; o < l; o++)
                    s += this.renderer.tablecell(this.parseInline(i[o].tokens), {
                      header: !1,
                      align: u.align[o],
                    });
                  c += this.renderer.tablerow(s);
                }
                b += this.renderer.table(a, c);
                continue;
              case "blockquote":
                (c = this.parse(u.tokens)), (b += this.renderer.blockquote(c));
                continue;
              case "list":
                for (
                  p = u.ordered, d = u.start, h = u.loose, r = u.items.length, c = "", n = 0;
                  n < r;
                  n++
                )
                  (g = u.items[n]),
                    (m = g.checked),
                    (v = g.task),
                    (f = ""),
                    g.task &&
                      ((y = this.renderer.checkbox(m)),
                      h
                        ? g.tokens.length > 0 && "paragraph" === g.tokens[0].type
                          ? ((g.tokens[0].text = y + " " + g.tokens[0].text),
                            g.tokens[0].tokens &&
                              g.tokens[0].tokens.length > 0 &&
                              "text" === g.tokens[0].tokens[0].type &&
                              (g.tokens[0].tokens[0].text = y + " " + g.tokens[0].tokens[0].text))
                          : g.tokens.unshift({ type: "text", text: y })
                        : (f += y)),
                    (f += this.parse(g.tokens, h)),
                    (c += this.renderer.listitem(f, v, m));
                b += this.renderer.list(c, p, d);
                continue;
              case "html":
                b += this.renderer.html(u.text);
                continue;
              case "paragraph":
                b += this.renderer.paragraph(this.parseInline(u.tokens));
                continue;
              case "text":
                for (
                  c = u.tokens ? this.parseInline(u.tokens) : u.text;
                  t + 1 < x && "text" === e[t + 1].type;

                )
                  (u = e[++t]), (c += "\n" + (u.tokens ? this.parseInline(u.tokens) : u.text));
                b += k ? this.renderer.paragraph(c) : c;
                continue;
              default: {
                const e = 'Token with "' + u.type + '" type was not found.';
                if (this.options.silent) return void console.error(e);
                throw new Error(e);
              }
            }
        return b;
      }
      parseInline(e, t) {
        t = t || this.renderer;
        let n,
          o,
          r,
          l = "";
        const i = e.length;
        for (n = 0; n < i; n++)
          if (
            ((o = e[n]),
            this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[o.type] &&
              ((r = this.options.extensions.renderers[o.type].call({ parser: this }, o)),
              !1 !== r ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(o.type)))
          )
            l += r || "";
          else
            switch (o.type) {
              case "escape":
              case "text":
                l += t.text(o.text);
                break;
              case "html":
                l += t.html(o.text);
                break;
              case "link":
                l += t.link(o.href, o.title, this.parseInline(o.tokens, t));
                break;
              case "image":
                l += t.image(o.href, o.title, o.text);
                break;
              case "strong":
                l += t.strong(this.parseInline(o.tokens, t));
                break;
              case "em":
                l += t.em(this.parseInline(o.tokens, t));
                break;
              case "codespan":
                l += t.codespan(o.text);
                break;
              case "br":
                l += t.br();
                break;
              case "del":
                l += t.del(this.parseInline(o.tokens, t));
                break;
              default: {
                const e = 'Token with "' + o.type + '" type was not found.';
                if (this.options.silent) return void console.error(e);
                throw new Error(e);
              }
            }
        return l;
      }
    }
    function Qi(e, t, n) {
      if (null == e) throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e)
        throw new Error(
          "marked(): input parameter is of type " +
            Object.prototype.toString.call(e) +
            ", string expected"
        );
      if (
        ("function" == typeof t && ((n = t), (t = null)), Pi((t = Oi({}, Qi.defaults, t || {}))), n)
      ) {
        const o = t.highlight;
        let r;
        try {
          r = qi.lex(e, t);
        } catch (e) {
          return n(e);
        }
        const l = function (e) {
          let l;
          if (!e)
            try {
              t.walkTokens && Qi.walkTokens(r, t.walkTokens), (l = Ki.parse(r, t));
            } catch (t) {
              e = t;
            }
          return (t.highlight = o), e ? n(e) : n(null, l);
        };
        if (!o || o.length < 3) return l();
        if ((delete t.highlight, !r.length)) return l();
        let i = 0;
        return (
          Qi.walkTokens(r, function (e) {
            "code" === e.type &&
              (i++,
              setTimeout(() => {
                o(e.text, e.lang, function (t, n) {
                  if (t) return l(t);
                  null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                    i--,
                    0 === i && l();
                });
              }, 0));
          }),
          void (0 === i && l())
        );
      }
      try {
        const n = qi.lex(e, t);
        return t.walkTokens && Qi.walkTokens(n, t.walkTokens), Ki.parse(n, t);
      } catch (e) {
        if (
          ((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent)
        )
          return "<p>An error occurred:</p><pre>" + xi(e.message + "", !0) + "</pre>";
        throw e;
      }
    }
    (Qi.options = Qi.setOptions =
      function (e) {
        var t;
        return Oi(Qi.defaults, e), (t = Qi.defaults), (gi = t), Qi;
      }),
      (Qi.getDefaults = fi),
      (Qi.defaults = gi),
      (Qi.use = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        const o = Oi({}, ...t),
          r = Qi.defaults.extensions || { renderers: {}, childTokens: {} };
        let l;
        t.forEach(e => {
          if (
            (e.extensions &&
              ((l = !0),
              e.extensions.forEach(e => {
                if (!e.name) throw new Error("extension name required");
                if (e.renderer) {
                  const t = r.renderers ? r.renderers[e.name] : null;
                  r.renderers[e.name] = t
                    ? function () {
                        for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                          o[r] = arguments[r];
                        let l = e.renderer.apply(this, o);
                        return !1 === l && (l = t.apply(this, o)), l;
                      }
                    : e.renderer;
                }
                if (e.tokenizer) {
                  if (!e.level || ("block" !== e.level && "inline" !== e.level))
                    throw new Error("extension level must be 'block' or 'inline'");
                  r[e.level] ? r[e.level].unshift(e.tokenizer) : (r[e.level] = [e.tokenizer]),
                    e.start &&
                      ("block" === e.level
                        ? r.startBlock
                          ? r.startBlock.push(e.start)
                          : (r.startBlock = [e.start])
                        : "inline" === e.level &&
                          (r.startInline
                            ? r.startInline.push(e.start)
                            : (r.startInline = [e.start])));
                }
                e.childTokens && (r.childTokens[e.name] = e.childTokens);
              })),
            e.renderer)
          ) {
            const t = Qi.defaults.renderer || new Zi();
            for (const n in e.renderer) {
              const o = t[n];
              t[n] = function () {
                for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
                  l[i] = arguments[i];
                let s = e.renderer[n].apply(t, l);
                return !1 === s && (s = o.apply(t, l)), s;
              };
            }
            o.renderer = t;
          }
          if (e.tokenizer) {
            const t = Qi.defaults.tokenizer || new Vi();
            for (const n in e.tokenizer) {
              const o = t[n];
              t[n] = function () {
                for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
                  l[i] = arguments[i];
                let s = e.tokenizer[n].apply(t, l);
                return !1 === s && (s = o.apply(t, l)), s;
              };
            }
            o.tokenizer = t;
          }
          if (e.walkTokens) {
            const t = Qi.defaults.walkTokens;
            o.walkTokens = function (n) {
              e.walkTokens.call(this, n), t && t.call(this, n);
            };
          }
          l && (o.extensions = r), Qi.setOptions(o);
        });
      }),
      (Qi.walkTokens = function (e, t) {
        for (const n of e)
          switch ((t.call(Qi, n), n.type)) {
            case "table":
              for (const e of n.header) Qi.walkTokens(e.tokens, t);
              for (const e of n.rows) for (const n of e) Qi.walkTokens(n.tokens, t);
              break;
            case "list":
              Qi.walkTokens(n.items, t);
              break;
            default:
              Qi.defaults.extensions &&
              Qi.defaults.extensions.childTokens &&
              Qi.defaults.extensions.childTokens[n.type]
                ? Qi.defaults.extensions.childTokens[n.type].forEach(function (e) {
                    Qi.walkTokens(n[e], t);
                  })
                : n.tokens && Qi.walkTokens(n.tokens, t);
          }
      }),
      (Qi.parseInline = function (e, t) {
        if (null == e)
          throw new Error("marked.parseInline(): input parameter is undefined or null");
        if ("string" != typeof e)
          throw new Error(
            "marked.parseInline(): input parameter is of type " +
              Object.prototype.toString.call(e) +
              ", string expected"
          );
        Pi((t = Oi({}, Qi.defaults, t || {})));
        try {
          const n = qi.lexInline(e, t);
          return t.walkTokens && Qi.walkTokens(n, t.walkTokens), Ki.parseInline(n, t);
        } catch (e) {
          if (
            ((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent)
          )
            return "<p>An error occurred:</p><pre>" + xi(e.message + "", !0) + "</pre>";
          throw e;
        }
      }),
      (Qi.Parser = Ki),
      (Qi.parser = Ki.parse),
      (Qi.Renderer = Zi),
      (Qi.TextRenderer = Gi),
      (Qi.Lexer = qi),
      (Qi.lexer = qi.lex),
      (Qi.Tokenizer = Vi),
      (Qi.Slugger = Ji),
      (Qi.parse = Qi);
    const Yi = /\$.*?\$/,
      Xi = /^\$(.*?)\$/,
      es = /^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,
      ts = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.replace(/:(.+?):/g, (e, n) =>
          t[n] ? '<img class="wl-emoji" src="'.concat(t[n], '" alt="').concat(n, '">') : e
        );
      },
      ns = (e, t) => {
        let { emojiMap: n, highlighter: o, texRenderer: r } = t;
        if (
          (Qi.setOptions({ highlight: o || void 0, breaks: !0, smartLists: !0, smartypants: !0 }),
          r)
        ) {
          const e = (e => [
            {
              name: "blockMath",
              level: "block",
              tokenizer(t) {
                const n = es.exec(t);
                if (null !== n) return { type: "html", raw: n[0], text: e(!0, n[1]) };
              },
            },
            {
              name: "inlineMath",
              level: "inline",
              start(e) {
                const t = e.search(Yi);
                return -1 !== t ? t : e.length;
              },
              tokenizer(t) {
                const n = Xi.exec(t);
                if (null !== n) return { type: "html", raw: n[0], text: e(!1, n[1]) };
              },
            },
          ])(r);
          Qi.use({ extensions: e });
        }
        return Qi.parse(ts(e, n));
      },
      os = e => e.dataset.path || e.getAttribute("id"),
      rs = (e, t) => {
        const n = (function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { controls: t = !1, interval: n = "requestAnimationFrame" } = e,
            o = Ut(new Date()),
            r = () => (o.value = new Date()),
            l =
              "requestAnimationFrame" === n
                ? Pl(r, { immediate: !0 })
                : ul(r, n, { immediate: !0 });
          return t ? ql({ now: o }, l) : o;
        })();
        return ar(() => ni(e, n.value, t));
      };
    let ls = null;
    const is = () => ls || (ls = Ml("USER_KEY", {}));
    let ss = null;
    const as = () => ss || (ss = Ml("WALINE_LIKE", [])),
      cs = e => {
        var t;
        let {
          serverURL: n,
          path: o = window.location.pathname,
          selector: r = ".waline-comment-count",
          lang: l = "zh-CN",
        } = e;
        const i = new AbortController(),
          s = document.querySelectorAll(r),
          a = is();
        return (
          s.length &&
            (e => {
              let { serverURL: t, lang: n, paths: o, signal: r, token: l } = e;
              const i = {};
              return (
                l && (i.Authorization = "Bearer ".concat(l)),
                fetch(
                  ""
                    .concat(t, "/comment?type=count&url=")
                    .concat(encodeURIComponent(o.join(",")), "&lang=")
                    .concat(n),
                  { signal: r, headers: i }
                )
                  .then(e => e.json())
                  .then(e => si(e, "comment count"))
                  .then(e => (Array.isArray(e) ? e : [e]))
              );
            })({
              serverURL: Ql(n),
              paths: Array.from(s).map(e => Gl(e.dataset.path || e.getAttribute("id") || o)),
              lang: l,
              signal: i.signal,
              token: null === (t = a.value) || void 0 === t ? void 0 : t.token,
            })
              .then(e => {
                s.forEach((t, n) => {
                  t.innerText = e[n].toString();
                });
              })
              .catch(li),
          i.abort.bind(i)
        );
      };
    e.commentCount = cs;
    var us,
      ps,
      ds =
        "function" == typeof Map
          ? new Map()
          : ((us = []),
            (ps = []),
            {
              has: function (e) {
                return us.indexOf(e) > -1;
              },
              get: function (e) {
                return ps[us.indexOf(e)];
              },
              set: function (e, t) {
                -1 === us.indexOf(e) && (us.push(e), ps.push(t));
              },
              delete: function (e) {
                var t = us.indexOf(e);
                t > -1 && (us.splice(t, 1), ps.splice(t, 1));
              },
            }),
      hs = function (e) {
        return new Event(e, { bubbles: !0 });
      };
    try {
      new Event("test");
    } catch (us) {
      hs = function (e) {
        var t = document.createEvent("Event");
        return t.initEvent(e, !0, !1), t;
      };
    }
    function fs(e) {
      var t = ds.get(e);
      t && t.destroy();
    }
    function gs(e) {
      var t = ds.get(e);
      t && t.update();
    }
    var ms = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle
      ? (((ms = function (e) {
          return e;
        }).destroy = function (e) {
          return e;
        }),
        (ms.update = function (e) {
          return e;
        }))
      : (((ms = function (e, t) {
          return (
            e &&
              Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                return (function (e) {
                  if (e && e.nodeName && "TEXTAREA" === e.nodeName && !ds.has(e)) {
                    var t,
                      n = null,
                      o = null,
                      r = null,
                      l = function () {
                        e.clientWidth !== o && c();
                      },
                      i = function (t) {
                        window.removeEventListener("resize", l, !1),
                          e.removeEventListener("input", c, !1),
                          e.removeEventListener("keyup", c, !1),
                          e.removeEventListener("autosize:destroy", i, !1),
                          e.removeEventListener("autosize:update", c, !1),
                          Object.keys(t).forEach(function (n) {
                            e.style[n] = t[n];
                          }),
                          ds.delete(e);
                      }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap,
                      });
                    e.addEventListener("autosize:destroy", i, !1),
                      "onpropertychange" in e &&
                        "oninput" in e &&
                        e.addEventListener("keyup", c, !1),
                      window.addEventListener("resize", l, !1),
                      e.addEventListener("input", c, !1),
                      e.addEventListener("autosize:update", c, !1),
                      (e.style.overflowX = "hidden"),
                      (e.style.wordWrap = "break-word"),
                      ds.set(e, { destroy: i, update: c }),
                      "vertical" === (t = window.getComputedStyle(e, null)).resize
                        ? (e.style.resize = "none")
                        : "both" === t.resize && (e.style.resize = "horizontal"),
                      (n =
                        "content-box" === t.boxSizing
                          ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom))
                          : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth)),
                      isNaN(n) && (n = 0),
                      c();
                  }
                  function s(t) {
                    var n = e.style.width;
                    (e.style.width = "0px"), (e.style.width = n), (e.style.overflowY = t);
                  }
                  function a() {
                    if (0 !== e.scrollHeight) {
                      var t = (function (e) {
                          for (var t = []; e && e.parentNode && e.parentNode instanceof Element; )
                            e.parentNode.scrollTop &&
                              t.push({ node: e.parentNode, scrollTop: e.parentNode.scrollTop }),
                              (e = e.parentNode);
                          return t;
                        })(e),
                        r = document.documentElement && document.documentElement.scrollTop;
                      (e.style.height = ""),
                        (e.style.height = e.scrollHeight + n + "px"),
                        (o = e.clientWidth),
                        t.forEach(function (e) {
                          e.node.scrollTop = e.scrollTop;
                        }),
                        r && (document.documentElement.scrollTop = r);
                    }
                  }
                  function c() {
                    a();
                    var t = Math.round(parseFloat(e.style.height)),
                      n = window.getComputedStyle(e, null),
                      o =
                        "content-box" === n.boxSizing
                          ? Math.round(parseFloat(n.height))
                          : e.offsetHeight;
                    if (
                      (o < t
                        ? "hidden" === n.overflowY &&
                          (s("scroll"),
                          a(),
                          (o =
                            "content-box" === n.boxSizing
                              ? Math.round(parseFloat(window.getComputedStyle(e, null).height))
                              : e.offsetHeight))
                        : "hidden" !== n.overflowY &&
                          (s("hidden"),
                          a(),
                          (o =
                            "content-box" === n.boxSizing
                              ? Math.round(parseFloat(window.getComputedStyle(e, null).height))
                              : e.offsetHeight)),
                      r !== o)
                    ) {
                      r = o;
                      var l = hs("autosize:resized");
                      try {
                        e.dispatchEvent(l);
                      } catch (e) {}
                    }
                  }
                })(e);
              }),
            e
          );
        }).destroy = function (e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], fs), e;
        }),
        (ms.update = function (e) {
          return e && Array.prototype.forEach.call(e.length ? e : [e], gs), e;
        }));
    var vs = ms;
    const ys = e => {
      let { size: t } = e;
      return cr(
        "svg",
        { width: t, height: t, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" },
        cr(
          "circle",
          {
            cx: 50,
            cy: 50,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "4",
            r: "40",
            "stroke-dasharray": "85 30",
          },
          cr("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            repeatCount: "indefinite",
            dur: "1s",
            values: "0 50 50;360 50 50",
            keyTimes: "0;1",
          })
        )
      );
    };
    var ws = (e, t) => {
      const n = e.__vccOpts || e;
      for (const [e, o] of t) n[e] = o;
      return n;
    };
    const ks = $n({
        name: "ImageWall",
        components: { LoadingIcon: ys },
        props: {
          items: { type: Array, default: () => [] },
          columnWidth: { type: Number, default: 300 },
          gap: { type: Number, default: 0 },
        },
        emit: ["insert"],
        setup(e) {
          let t = null;
          const n = Ut(null),
            o = Ut({}),
            r = Ut([]),
            l = () => {
              const t = Math.floor(
                (n.value.getBoundingClientRect().width + e.gap) / (e.columnWidth + e.gap)
              );
              return t > 0 ? t : 1;
            },
            i = e => new Array(e).fill(null).map(() => []),
            s = async t => {
              var o;
              if (t >= e.items.length) return;
              await an();
              const l = Array.from(
                (null === (o = n.value) || void 0 === o ? void 0 : o.children) || []
              ).reduce((e, t) =>
                t.getBoundingClientRect().height < e.getBoundingClientRect().height ? t : e
              );
              r.value[Number(l.dataset.index)].push(t), await s(t + 1);
            },
            a = async function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.value.length === l() && !e) return;
              r.value = i(l());
              const t = window.scrollY;
              await s(0), window.scrollTo({ top: t });
            };
          return (
            Ln(
              () => [e.items],
              () => {
                (o.value = {}), a(!0);
              }
            ),
            Ln(
              () => [e.columnWidth, e.gap],
              () => a()
            ),
            Pn(() => {
              a(!0), (t = new ResizeObserver(() => a())), t.observe(n.value);
            }),
            Fn(() => t.unobserve(n.value)),
            { columns: r, state: o, wall: n }
          );
        },
      }),
      bs = ["data-index"],
      xs = ["src", "title", "onLoad", "onClick"];
    const _s = $n({
        name: "CommentBox",
        components: {
          CloseIcon: e => {
            let { size: t } = e;
            return cr(
              "svg",
              { class: "wl-close-icon", viewBox: "0 0 1024 1024", width: t, height: t },
              [
                cr("path", {
                  d: "M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",
                  fill: "currentColor",
                }),
                cr("path", {
                  d: "m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",
                  fill: "#888",
                }),
              ]
            );
          },
          EmojiIcon: () =>
            cr(
              "svg",
              { viewBox: "0 0 1024 1024", width: "24", height: "24" },
              cr("path", {
                d: "M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",
                fill: "currentColor",
              })
            ),
          ImageIcon: () =>
            cr("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
              cr("path", {
                d: "M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",
                fill: "currentColor",
              }),
              cr("path", {
                d: "M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",
                fill: "currentColor",
              }),
            ]),
          ImageWall: ws(ks, [
            [
              "render",
              function (e, t, n, o, r, l) {
                const i = Hn("LoadingIcon");
                return (
                  zo(),
                  Lo(
                    "div",
                    { ref: "wall", class: "wl-gallery", style: _({ gap: "".concat(e.gap, "px") }) },
                    [
                      (zo(!0),
                      Lo(
                        bo,
                        null,
                        Zn(
                          e.columns,
                          (t, n) => (
                            zo(),
                            Lo(
                              "div",
                              {
                                key: n,
                                class: "wl-gallery-column",
                                "data-index": n,
                                style: _({ gap: "".concat(e.gap, "px") }),
                              },
                              [
                                (zo(!0),
                                Lo(
                                  bo,
                                  null,
                                  Zn(
                                    t,
                                    t => (
                                      zo(),
                                      Lo(
                                        bo,
                                        { key: t },
                                        [
                                          e.state[e.items[t].src]
                                            ? Do("v-if", !0)
                                            : (zo(),
                                              To(i, {
                                                key: 0,
                                                size: 36,
                                                style: { margin: "20px auto" },
                                              })),
                                          Po(
                                            "img",
                                            {
                                              class: "wl-gallery-item",
                                              src: e.items[t].src,
                                              title: e.items[t].title,
                                              loading: "lazy",
                                              onLoad: n => (e.state[e.items[t].src] = !0),
                                              onClick: n =>
                                                e.$emit(
                                                  "insert",
                                                  "![](".concat(e.items[t].src, ")")
                                                ),
                                            },
                                            null,
                                            40,
                                            xs
                                          ),
                                        ],
                                        64
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ],
                              12,
                              bs
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    4
                  )
                );
              },
            ],
            ["__file", "ImageWall.vue"],
          ]),
          MarkdownIcon: () =>
            cr(
              "svg",
              { width: "16", height: "16", ariaHidden: "true" },
              cr("path", {
                d: "M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",
                fill: "currentColor",
              })
            ),
          PreviewIcon: () =>
            cr("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
              cr("path", {
                d: "M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",
                fill: "currentColor",
              }),
              cr("path", {
                d: "M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",
                fill: "currentColor",
              }),
            ]),
          LoadingIcon: ys,
          GifIcon: () =>
            cr("svg", { width: 24, height: 24, fill: "currentcolor", viewBox: "0 0 24 24" }, [
              cr("path", {
                style: "transform: translateY(0.5px)",
                d: "M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z",
              }),
              cr("path", {
                d: "M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z",
              }),
            ]),
        },
        props: {
          rootId: { type: String, default: "" },
          replyId: { type: String, default: "" },
          replyUser: { type: String, default: "" },
        },
        emits: ["submit", "cancel-reply"],
        setup(e, t) {
          let { emit: n } = t;
          const o = Rn("config"),
            r = Ml("WALINE_COMMENT_BOX_EDITOR", ""),
            l = Ml("WALINE_USER_META", { nick: "", mail: "", link: "" }),
            i = is(),
            s = Ut({}),
            a = Ut(null),
            c = Ut(null),
            u = Ut(null),
            p = Ut(null),
            d = Ut(null),
            h = Ut(null),
            f = Ut(null),
            g = Ut({ tabs: [], map: {} }),
            m = Ut(0),
            v = Ut(!1),
            y = Ut(!1),
            w = Ut(!1),
            k = Ut(""),
            b = Ut(0),
            x = bt({ loading: !0, list: [] }),
            _ = Ut(0),
            S = Ut(!1),
            C = Ut(""),
            I = Ut(!1),
            z = ar(() => o.value.locale),
            R = ar(() => {
              var e;
              return Boolean(null === (e = i.value) || void 0 === e ? void 0 : e.token);
            }),
            E = ar(() => !1 !== o.value.imageUploader),
            A = e => {
              const t = a.value,
                n = t.selectionStart,
                o = t.selectionEnd || 0,
                l = t.scrollTop;
              (r.value = t.value.substring(0, n) + e + t.value.substring(o, t.value.length)),
                t.focus(),
                (t.selectionStart = n + e.length),
                (t.selectionEnd = n + e.length),
                (t.scrollTop = l);
            },
            L = e => {
              const t = "![".concat(o.value.locale.uploading, " ").concat(e.name, "]()");
              return (
                A(t),
                Promise.resolve()
                  .then(() => o.value.imageUploader(e))
                  .then(n => {
                    r.value = r.value.replace(t, "\r\n![".concat(e.name, "](").concat(n, ")"));
                  })
              );
            },
            T = () => {
              var t, c;
              const { serverURL: u, lang: p, login: d, wordLimit: h, requiredMeta: f } = o.value,
                m = {
                  comment: C.value,
                  nick: l.value.nick,
                  mail: l.value.mail,
                  link: l.value.link,
                  ua: navigator.userAgent,
                  url: o.value.path,
                };
              if (null !== (t = i.value) && void 0 !== t && t.token)
                (m.nick = i.value.display_name), (m.mail = i.value.email), (m.link = i.value.url);
              else {
                if ("force" === d) return;
                var v, y, w;
                if (f.indexOf("nick") > -1 && !m.nick)
                  return (
                    null === (v = s.value.nick) || void 0 === v || v.focus(),
                    alert(z.value.nickError)
                  );
                if (
                  (f.indexOf("mail") > -1 && !m.mail) ||
                  (m.mail && !/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(m.mail))
                )
                  return (
                    null === (y = s.value.mail) || void 0 === y || y.focus(),
                    alert(z.value.mailError)
                  );
                if (!m.comment) return void (null === (w = a.value) || void 0 === w || w.focus());
                m.nick || (m.nick = z.value.anonymous);
              }
              if (!S.value)
                return alert(
                  z.value.wordHint
                    .replace("$0", h[0].toString())
                    .replace("$1", h[1].toString())
                    .replace("$2", b.value.toString())
                );
              (m.comment = ts(m.comment, g.value.map)),
                e.replyId &&
                  e.rootId &&
                  ((m.pid = e.replyId), (m.rid = e.rootId), (m.at = e.replyUser)),
                (I.value = !0),
                (e => {
                  let { serverURL: t, lang: n, token: o, comment: r } = e;
                  const l = { "Content-Type": "application/json" };
                  return (
                    o && (l.Authorization = "Bearer ".concat(o)),
                    fetch("".concat(t, "/comment?lang=").concat(n), {
                      method: "POST",
                      headers: l,
                      body: JSON.stringify(r),
                    }).then(e => e.json())
                  );
                })({
                  serverURL: u,
                  lang: p,
                  token: null === (c = i.value) || void 0 === c ? void 0 : c.token,
                  comment: m,
                })
                  .then(t => {
                    if (((I.value = !1), t.errmsg)) return alert(t.errmsg);
                    n("submit", t.data),
                      (r.value = ""),
                      (k.value = ""),
                      e.replyId && n("cancel-reply");
                  })
                  .catch(e => {
                    (I.value = !1), alert(e.message);
                  });
            },
            j = e => {
              u.value.contains(e.target) || p.value.contains(e.target) || (v.value = !1),
                d.value.contains(e.target) || h.value.contains(e.target) || (y.value = !1);
            },
            $ = async e => {
              var t;
              const { scrollTop: n, clientHeight: r, scrollHeight: l } = e.target,
                i = (r + n) / l,
                s = o.value.search,
                a = (null === (t = f.value) || void 0 === t ? void 0 : t.value) || "";
              i < 0.9 ||
                x.loading ||
                ((x.loading = !0),
                x.list.push(...(s.more ? await s.more(a, x.list.length) : await s.search(a))),
                (x.loading = !1),
                setTimeout(() => {
                  e.target.scrollTop = n;
                }, 50));
            },
            O = (function (e) {
              return il(
                al(
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                ),
                e
              );
            })(e => {
              (x.list = []), $(e);
            }, 300);
          return (
            Ln(
              [o, b],
              e => {
                let [t, n] = e;
                const { wordLimit: o } = t;
                o
                  ? n < o[0] && 0 !== o[0]
                    ? ((_.value = o[0]), (S.value = !1))
                    : n > o[1]
                    ? ((_.value = o[1]), (S.value = !1))
                    : ((_.value = o[1]), (S.value = !0))
                  : ((_.value = 0), (S.value = !0));
              },
              { immediate: !0 }
            ),
            Ln(y, async e => {
              if (!e) return;
              const t = o.value.search;
              f.value && (f.value.value = ""),
                (x.loading = !0),
                (x.list = t.default ? await t.default() : await t.search("")),
                (x.loading = !1);
            }),
            Pn(() => {
              document.body.addEventListener("click", j),
                Ln(
                  () => r.value,
                  e => {
                    const { highlighter: t, texRenderer: n } = o.value;
                    (C.value = e),
                      (k.value = ns(e, { emojiMap: g.value.map, highlighter: t, texRenderer: n })),
                      (b.value = (e =>
                        (e => e.match(/[\w\d\s\u00C0-\u024F]+/giu) || [])(e).reduce(
                          (e, t) => e + ("" === t.trim() ? 0 : t.trim().split(/\s+/u).length),
                          0
                        ) + (e => e.match(/[\u4E00-\u9FA5]/gu) || [])(e).length)(e)),
                      e ? vs(a.value) : vs.destroy(a.value);
                  },
                  { immediate: !0 }
                ),
                Ln(
                  () => o.value.emoji,
                  e => {
                    return ((t = Array.isArray(e) ? e : []),
                    Promise.all(
                      t.map(e => ("string" == typeof e ? oi(Jl(e)) : Promise.resolve(e)))
                    ).then(e => {
                      const t = { tabs: [], map: {} };
                      return (
                        e.forEach(e => {
                          const { name: n, folder: o, icon: r, prefix: l, type: i, items: s } = e;
                          t.tabs.push({
                            name: n,
                            icon: ri(r, o, l, i),
                            items: s.map(e => {
                              const n = "".concat(l || "").concat(e);
                              return (t.map[n] = ri(e, o, l, i)), n;
                            }),
                          });
                        }),
                        t
                      );
                    })).then(e => {
                      g.value = e;
                    });
                  },
                  { immediate: !0 }
                );
            }),
            Nn(() => {
              document.body.removeEventListener("click", j);
            }),
            {
              config: o,
              locale: z,
              insert: A,
              onChange: () => {
                const e = c.value;
                e.files &&
                  E.value &&
                  L(e.files[0]).then(() => {
                    e.value = "";
                  });
              },
              onDrop: e => {
                var t;
                if (null !== (t = e.dataTransfer) && void 0 !== t && t.items) {
                  const t = hi(e.dataTransfer.items);
                  t && E.value && (L(t), e.preventDefault());
                }
              },
              onKeyDown: e => {
                const t = e.key;
                (e.ctrlKey || e.metaKey) && "Enter" === t && T();
              },
              onPaste: e => {
                if (e.clipboardData) {
                  const t = hi(e.clipboardData.items);
                  t && E.value && L(t);
                }
              },
              onLogin: e => {
                e.preventDefault();
                const { lang: t, serverURL: n } = o.value,
                  r = (window.innerWidth - 450) / 2,
                  l = (window.innerHeight - 450) / 2,
                  s = window.open(
                    "".concat(n, "/ui/login?lng=").concat(encodeURIComponent(t)),
                    "_blank",
                    "width="
                      .concat(450, ",height=")
                      .concat(450, ",left=")
                      .concat(r, ",top=")
                      .concat(
                        l,
                        ",scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no"
                      )
                  );
                null == s || s.postMessage({ type: "TOKEN", data: null }, "*");
                const a = e => {
                  let { data: t } = e;
                  t &&
                    "userInfo" === t.type &&
                    t.data.token &&
                    (null == s || s.close(),
                    (i.value = t.data),
                    (t.data.remember ? localStorage : sessionStorage).setItem(
                      "WALINE_USER",
                      JSON.stringify(t.data)
                    ),
                    window.removeEventListener("message", a));
                };
                window.addEventListener("message", a);
              },
              onLogout: () => {
                (i.value = {}),
                  localStorage.setItem("WALINE_USER", "null"),
                  sessionStorage.setItem("WALINE_USER", "null");
              },
              onProfile: e => {
                e.preventDefault();
                const { lang: t, serverURL: n } = o.value,
                  r = (window.innerWidth - 800) / 2,
                  l = (window.innerHeight - 800) / 2,
                  s = window.open(
                    "".concat(n, "/ui/profile?lng=").concat(encodeURIComponent(t)),
                    "_blank",
                    "width="
                      .concat(800, ",height=")
                      .concat(800, ",left=")
                      .concat(r, ",top=")
                      .concat(
                        l,
                        ",scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no"
                      )
                  );
                null == s || s.postMessage({ type: "TOKEN", data: i.value.token }, "*");
                const a = e => {
                  let { data: t } = e;
                  t &&
                    "profile" === t.type &&
                    ((i.value = { ...i.value, ...t }),
                    [localStorage, sessionStorage]
                      .filter(e => e.getItem("WALINE_USER"))
                      .forEach(e => e.setItem("WALINE_USER", JSON.stringify(i))),
                    window.removeEventListener("message", a));
                };
                window.addEventListener("message", a);
              },
              submitComment: T,
              onImageWallScroll: $,
              onGifSearch: O,
              isLogin: R,
              userInfo: i,
              isSubmitting: I,
              wordNumber: b,
              wordLimit: _,
              isWordNumberLegal: S,
              editor: r,
              userMeta: l,
              emoji: g,
              emojiTabIndex: m,
              showEmoji: v,
              gifData: x,
              showGif: y,
              canUploadImage: E,
              previewText: k,
              showPreview: w,
              inputRefs: s,
              editorRef: a,
              emojiButtonRef: u,
              emojiPopupRef: p,
              gifButtonRef: d,
              gifPopupRef: h,
              imageUploadRef: c,
              gifSearchInputRef: f,
            }
          );
        },
      }),
      Ss = { class: "wl-comment" },
      Cs = { key: 0, class: "wl-login-info" },
      Is = { class: "wl-avatar" },
      zs = ["title"],
      Rs = ["src"],
      Es = ["textContent"],
      As = { class: "wl-panel" },
      Ls = ["for", "textContent"],
      Ts = ["id", "name", "type", "onUpdate:modelValue"],
      js = ["placeholder"],
      $s = { class: "wl-preview" },
      Os = Po("hr", null, null, -1),
      Us = ["innerHTML"],
      Ms = { class: "wl-footer" },
      Ps = { class: "wl-actions" },
      Fs = {
        href: "https://guides.github.com/features/mastering-markdown/",
        title: "Markdown Guide",
        "aria-label": "Markdown is supported",
        class: "wl-action",
        target: "_blank",
        rel: "noreferrer",
      },
      Ns = ["title"],
      Vs = ["title"],
      Bs = ["title"],
      Ds = ["title"],
      Hs = { class: "wl-info" },
      Ws = { class: "wl-text-number" },
      qs = { key: 0 },
      Zs = Bo("  /  "),
      Gs = ["textContent"],
      Js = ["textContent"],
      Ks = ["disabled"],
      Qs = ["placeholder"],
      Ys = { key: 0, class: "wl-loading" },
      Xs = { key: 0, class: "wl-tab-wrapper" },
      ea = ["title", "onClick"],
      ta = ["src", "alt"],
      na = { key: 0, class: "wl-tabs" },
      oa = ["onClick"],
      ra = ["src", "alt", "title"],
      la = ["title"];
    var ia = ws(_s, [
      [
        "render",
        function (e, t, n, o, r, l) {
          const i = Hn("CloseIcon"),
            s = Hn("MarkdownIcon"),
            a = Hn("EmojiIcon"),
            c = Hn("GifIcon"),
            u = Hn("ImageIcon"),
            p = Hn("PreviewIcon"),
            d = Hn("LoadingIcon"),
            h = Hn("ImageWall");
          return (
            zo(),
            Lo("div", Ss, [
              "disable" !== e.config.login && e.isLogin
                ? (zo(),
                  Lo("div", Cs, [
                    Po("div", Is, [
                      Po(
                        "button",
                        {
                          class: "wl-logout-btn",
                          title: e.locale.logout,
                          onClick:
                            t[0] ||
                            (t[0] = function () {
                              return e.onLogout && e.onLogout(...arguments);
                            }),
                        },
                        [Fo(i, { size: 14 })],
                        8,
                        zs
                      ),
                      Po("img", { src: e.userInfo.avatar, alt: "avatar" }, null, 8, Rs),
                    ]),
                    Po(
                      "a",
                      {
                        href: "#",
                        class: "wl-login-nick",
                        "aria-label": "Profile",
                        onClick:
                          t[1] ||
                          (t[1] = function () {
                            return e.onProfile && e.onProfile(...arguments);
                          }),
                        textContent: A(e.userInfo.display_name),
                      },
                      null,
                      8,
                      Es
                    ),
                  ]))
                : Do("v-if", !0),
              Po("div", As, [
                "force" !== e.config.login && e.config.meta.length && !e.isLogin
                  ? (zo(),
                    Lo(
                      "div",
                      { key: 0, class: z(["wl-header", "item".concat(e.config.meta.length)]) },
                      [
                        (zo(!0),
                        Lo(
                          bo,
                          null,
                          Zn(
                            e.config.meta,
                            t => (
                              zo(),
                              Lo("div", { class: "wl-header-item", key: t }, [
                                Po(
                                  "label",
                                  {
                                    for: t,
                                    textContent: A(
                                      e.locale[t] +
                                        (e.config.requiredMeta.includes(t) ||
                                        !e.config.requiredMeta.length
                                          ? ""
                                          : "(".concat(e.locale.optional, ")"))
                                    ),
                                  },
                                  null,
                                  8,
                                  Ls
                                ),
                                Vn(
                                  Po(
                                    "input",
                                    {
                                      ref_for: !0,
                                      ref: n => {
                                        n && (e.inputRefs[t] = n);
                                      },
                                      id: "wl-".concat(t),
                                      class: z(["wl-input", "wl-".concat(t)]),
                                      name: t,
                                      type: "mail" === t ? "email" : "text",
                                      "onUpdate:modelValue": n => (e.userMeta[t] = n),
                                    },
                                    null,
                                    10,
                                    Ts
                                  ),
                                  [[Zr, e.userMeta[t]]]
                                ),
                              ])
                            )
                          ),
                          128
                        )),
                      ],
                      2
                    ))
                  : Do("v-if", !0),
                Vn(
                  Po(
                    "textarea",
                    {
                      class: "wl-editor",
                      ref: "editorRef",
                      id: "wl-edit",
                      placeholder: e.replyUser ? "@".concat(e.replyUser) : e.locale.placeholder,
                      "onUpdate:modelValue": t[2] || (t[2] = t => (e.editor = t)),
                      onKeydown:
                        t[3] ||
                        (t[3] = function () {
                          return e.onKeyDown && e.onKeyDown(...arguments);
                        }),
                      onDrop:
                        t[4] ||
                        (t[4] = function () {
                          return e.onDrop && e.onDrop(...arguments);
                        }),
                      onPaste:
                        t[5] ||
                        (t[5] = function () {
                          return e.onPaste && e.onPaste(...arguments);
                        }),
                    },
                    null,
                    40,
                    js
                  ),
                  [[Fr, e.editor]]
                ),
                Vn(
                  Po(
                    "div",
                    $s,
                    [
                      Os,
                      Po("h4", null, A(e.locale.preview) + ":", 1),
                      Po("div", { class: "wl-content", innerHTML: e.previewText }, null, 8, Us),
                    ],
                    512
                  ),
                  [[Jr, e.showPreview]]
                ),
                Po("div", Ms, [
                  Po("div", Ps, [
                    Po("a", Fs, [Fo(s)]),
                    Vn(
                      Po(
                        "button",
                        {
                          ref: "emojiButtonRef",
                          class: z(["wl-action", { actived: e.showEmoji }]),
                          title: e.locale.emoji,
                          onClick: t[6] || (t[6] = t => (e.showEmoji = !e.showEmoji)),
                        },
                        [Fo(a)],
                        10,
                        Ns
                      ),
                      [[Jr, e.emoji.tabs.length]]
                    ),
                    e.config.search
                      ? (zo(),
                        Lo(
                          "button",
                          {
                            key: 0,
                            ref: "gifButtonRef",
                            class: z(["wl-action", { actived: e.showGif }]),
                            title: e.locale.gif,
                            onClick: t[7] || (t[7] = t => (e.showGif = !e.showGif)),
                          },
                          [Fo(c)],
                          10,
                          Vs
                        ))
                      : Do("v-if", !0),
                    Po(
                      "input",
                      {
                        ref: "imageUploadRef",
                        class: "upload",
                        id: "wl-image-upload",
                        type: "file",
                        accept: ".png,.jpg,.jpeg,.webp,.bmp,.gif",
                        onChange:
                          t[8] ||
                          (t[8] = function () {
                            return e.onChange && e.onChange(...arguments);
                          }),
                      },
                      null,
                      544
                    ),
                    e.canUploadImage
                      ? (zo(),
                        Lo(
                          "label",
                          {
                            key: 1,
                            for: "wl-image-upload",
                            class: "wl-action",
                            title: e.locale.uploadImage,
                          },
                          [Fo(u)],
                          8,
                          Bs
                        ))
                      : Do("v-if", !0),
                    Po(
                      "button",
                      {
                        class: z(["wl-action", { actived: e.showPreview }]),
                        title: e.locale.preview,
                        onClick: t[9] || (t[9] = t => (e.showPreview = !e.showPreview)),
                      },
                      [Fo(p)],
                      10,
                      Ds
                    ),
                  ]),
                  Po("div", Hs, [
                    Po("div", Ws, [
                      Bo(A(e.wordNumber) + " ", 1),
                      e.config.wordLimit
                        ? (zo(),
                          Lo("span", qs, [
                            Zs,
                            Po(
                              "span",
                              {
                                class: z({ illegal: !e.isWordNumberLegal }),
                                textContent: A(e.wordLimit),
                              },
                              null,
                              10,
                              Gs
                            ),
                          ]))
                        : Do("v-if", !0),
                      Bo("  " + A(e.locale.word), 1),
                    ]),
                    "disable" === e.config.login || e.isLogin
                      ? Do("v-if", !0)
                      : (zo(),
                        Lo(
                          "button",
                          {
                            key: 0,
                            class: "wl-btn",
                            onClick:
                              t[10] ||
                              (t[10] = function () {
                                return e.onLogin && e.onLogin(...arguments);
                              }),
                            textContent: A(e.locale.login),
                          },
                          null,
                          8,
                          Js
                        )),
                    "force" !== e.config.login || e.isLogin
                      ? (zo(),
                        Lo(
                          "button",
                          {
                            key: 1,
                            class: "wl-btn primary",
                            title: "Cmd|Ctrl + Enter",
                            disabled: e.isSubmitting,
                            onClick:
                              t[11] ||
                              (t[11] = function () {
                                return e.submitComment && e.submitComment(...arguments);
                              }),
                          },
                          [
                            e.isSubmitting
                              ? (zo(), To(d, { key: 0, size: 16 }))
                              : (zo(), Lo(bo, { key: 1 }, [Bo(A(e.locale.submit), 1)], 64)),
                          ],
                          8,
                          Ks
                        ))
                      : Do("v-if", !0),
                  ]),
                  Po(
                    "div",
                    { ref: "gifPopupRef", class: z(["wl-gif-popup", { display: e.showGif }]) },
                    [
                      Po(
                        "input",
                        {
                          type: "text",
                          placeholder: e.locale.gifSearchPlaceholder,
                          ref: "gifSearchInputRef",
                          onInput:
                            t[12] ||
                            (t[12] = function () {
                              return e.onGifSearch && e.onGifSearch(...arguments);
                            }),
                        },
                        null,
                        40,
                        Qs
                      ),
                      Fo(
                        h,
                        {
                          items: e.gifData.list,
                          "column-width": 200,
                          gap: 6,
                          onInsert: t[13] || (t[13] = t => e.insert(t)),
                          onScroll: e.onImageWallScroll,
                        },
                        null,
                        8,
                        ["items", "onScroll"]
                      ),
                      e.gifData.loading
                        ? (zo(), Lo("div", Ys, [Fo(d, { size: 30 })]))
                        : Do("v-if", !0),
                    ],
                    2
                  ),
                  Po(
                    "div",
                    {
                      ref: "emojiPopupRef",
                      class: z(["wl-emoji-popup", { display: e.showEmoji }]),
                    },
                    [
                      (zo(!0),
                      Lo(
                        bo,
                        null,
                        Zn(
                          e.emoji.tabs,
                          (t, n) => (
                            zo(),
                            Lo(
                              bo,
                              { key: t.name },
                              [
                                n === e.emojiTabIndex
                                  ? (zo(),
                                    Lo("div", Xs, [
                                      (zo(!0),
                                      Lo(
                                        bo,
                                        null,
                                        Zn(
                                          t.items,
                                          t => (
                                            zo(),
                                            Lo(
                                              "button",
                                              {
                                                key: t,
                                                title: t,
                                                onClick: n => e.insert(":".concat(t, ":")),
                                              },
                                              [
                                                e.showEmoji
                                                  ? (zo(),
                                                    Lo(
                                                      "img",
                                                      {
                                                        key: 0,
                                                        class: "wl-emoji",
                                                        src: e.emoji.map[t],
                                                        alt: t,
                                                        loading: "lazy",
                                                        referrerPolicy: "no-referrer",
                                                      },
                                                      null,
                                                      8,
                                                      ta
                                                    ))
                                                  : Do("v-if", !0),
                                              ],
                                              8,
                                              ea
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                    ]))
                                  : Do("v-if", !0),
                              ],
                              64
                            )
                          )
                        ),
                        128
                      )),
                      e.emoji.tabs.length > 1
                        ? (zo(),
                          Lo("div", na, [
                            (zo(!0),
                            Lo(
                              bo,
                              null,
                              Zn(
                                e.emoji.tabs,
                                (t, n) => (
                                  zo(),
                                  Lo(
                                    "button",
                                    {
                                      key: t.name,
                                      class: z(["wl-tab", { active: e.emojiTabIndex === n }]),
                                      onClick: t => (e.emojiTabIndex = n),
                                    },
                                    [
                                      Po(
                                        "img",
                                        {
                                          class: "wl-emoji",
                                          src: t.icon,
                                          alt: t.name,
                                          title: t.name,
                                          loading: "lazy",
                                          referrerPolicy: "no-referrer",
                                        },
                                        null,
                                        8,
                                        ra
                                      ),
                                    ],
                                    10,
                                    oa
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : Do("v-if", !0),
                    ],
                    2
                  ),
                ]),
              ]),
              e.replyId
                ? (zo(),
                  Lo(
                    "button",
                    {
                      key: 1,
                      class: "wl-close",
                      title: e.locale.cancelReply,
                      onClick: t[14] || (t[14] = t => e.$emit("cancel-reply")),
                    },
                    [Fo(i, { size: 24 })],
                    8,
                    la
                  ))
                : Do("v-if", !0),
            ])
          );
        },
      ],
      ["__file", "CommentBox.vue"],
    ]);
    const sa = ["approved", "waiting", "spam"],
      aa = $n({
        props: {
          comment: { type: Object, required: !0 },
          rootId: { type: String, required: !0 },
          reply: { type: Object },
        },
        components: {
          CommentBox: ia,
          DeleteIcon: () =>
            cr(
              "svg",
              { viewBox: "0 0 1024 1024", width: "24", height: "24" },
              cr("path", {
                d: "m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",
                fill: "red",
              })
            ),
          LikeIcon: e => {
            let { active: t = !1 } = e;
            return cr("svg", { viewBox: "0 0 1024 1024", width: "24", height: "24" }, [
              cr("path", {
                d: "M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z".concat(
                  t
                    ? ""
                    : "M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"
                ),
                fill: t ? "red" : "currentColor",
              }),
            ]);
          },
          ReplyIcon: () =>
            cr(
              "svg",
              { viewBox: "0 0 1024 1024", width: "24", height: "24" },
              cr("path", {
                d: "M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",
                fill: "currentColor",
              })
            ),
          VerifiedIcon: () =>
            cr(
              "svg",
              { class: "verified-icon", viewBox: "0 0 1024 1024", width: "14", height: "14" },
              cr("path", {
                d: "m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",
                fill: "#27ae60",
              })
            ),
        },
        emits: ["submit", "reply", "like", "delete", "status", "sticky"],
        setup(e) {
          const t = Rn("config"),
            n = as(),
            o = is(),
            r = ar(() => t.value.locale),
            l = ar(() => {
              let { link: t } = e.comment;
              return t ? (Kl(t) ? t : "https://".concat(t)) : "";
            }),
            i = ar(() => n.value.includes(e.comment.objectId)),
            s = rs(e.comment.insertedAt, r.value),
            a = ar(() => "administrator" === o.value.type),
            c = ar(() => e.comment.user_id && o.value.objectId === e.comment.user_id),
            u = ar(() => {
              var t;
              return (
                e.comment.objectId ===
                (null === (t = e.reply) || void 0 === t ? void 0 : t.objectId)
              );
            });
          return {
            config: t,
            locale: r,
            isReplyingCurrent: u,
            link: l,
            like: i,
            time: s,
            isAdmin: a,
            isOwner: c,
            commentStatus: sa,
          };
        },
      }),
      ca = ["id"],
      ua = { class: "wl-user", "aria-hidden": "true" },
      pa = ["src"],
      da = { class: "wl-card" },
      ha = { class: "wl-head" },
      fa = ["href"],
      ga = { key: 1, class: "wl-nick" },
      ma = ["textContent"],
      va = ["textContent"],
      ya = ["textContent"],
      wa = ["textContent"],
      ka = ["textContent"],
      ba = { class: "wl-comment-actions" },
      xa = ["title"],
      _a = ["textContent"],
      Sa = ["title"],
      Ca = { class: "wl-meta", "aria-hidden": "true" },
      Ia = ["textContent"],
      za = ["textContent"],
      Ra = ["textContent"],
      Ea = ["innerHTML"],
      Aa = { key: 0, class: "wl-admin-actions" },
      La = { class: "wl-comment-status" },
      Ta = ["disabled", "onClick", "textContent"],
      ja = { key: 1, class: "wl-reply-wrapper" },
      $a = { key: 2, class: "wl-quote" };
    const Oa = $n({
        name: "WalineRoot",
        components: {
          CommentBox: ia,
          CommentCard: ws(aa, [
            [
              "render",
              function (e, t, n, o, r, l) {
                const i = Hn("VerifiedIcon"),
                  s = Hn("DeleteIcon"),
                  a = Hn("LikeIcon"),
                  c = Hn("ReplyIcon"),
                  u = Hn("CommentBox"),
                  p = Hn("CommentCard", !0);
                return (
                  zo(),
                  Lo(
                    "div",
                    { class: "wl-item", id: e.comment.objectId },
                    [
                      Po("div", ua, [
                        e.comment.avatar
                          ? (zo(), Lo("img", { key: 0, src: e.comment.avatar }, null, 8, pa))
                          : Do("v-if", !0),
                        e.comment.type ? (zo(), To(i, { key: 1 })) : Do("v-if", !0),
                      ]),
                      Po("div", da, [
                        Po("div", ha, [
                          e.link
                            ? (zo(),
                              Lo(
                                "a",
                                {
                                  key: 0,
                                  class: "wl-nick",
                                  href: e.link,
                                  target: "_blank",
                                  rel: "nofollow noreferrer",
                                },
                                A(e.comment.nick),
                                9,
                                fa
                              ))
                            : (zo(), Lo("span", ga, A(e.comment.nick), 1)),
                          "administrator" === e.comment.type
                            ? (zo(),
                              Lo(
                                "span",
                                { key: 2, class: "wl-badge", textContent: A(e.locale.admin) },
                                null,
                                8,
                                ma
                              ))
                            : Do("v-if", !0),
                          e.comment.label
                            ? (zo(),
                              Lo(
                                "span",
                                { key: 3, class: "wl-badge", textContent: A(e.comment.label) },
                                null,
                                8,
                                va
                              ))
                            : Do("v-if", !0),
                          e.comment.sticky
                            ? (zo(),
                              Lo(
                                "span",
                                { key: 4, class: "wl-badge", textContent: A(e.locale.sticky) },
                                null,
                                8,
                                ya
                              ))
                            : Do("v-if", !0),
                          void 0 !== e.comment.level && e.comment.level >= 0
                            ? (zo(),
                              Lo(
                                "span",
                                {
                                  key: 5,
                                  class: z("wl-badge level".concat(e.comment.level)),
                                  textContent: A(
                                    e.locale["level".concat(e.comment.level)] ||
                                      "Level ".concat(e.comment.level)
                                  ),
                                },
                                null,
                                10,
                                wa
                              ))
                            : Do("v-if", !0),
                          Po("span", { class: "wl-time", textContent: A(e.time) }, null, 8, ka),
                          Po("div", ba, [
                            e.isAdmin || e.isOwner
                              ? (zo(),
                                Lo(
                                  "button",
                                  {
                                    key: 0,
                                    class: "wl-delete",
                                    onClick: t[0] || (t[0] = t => e.$emit("delete", e.comment)),
                                  },
                                  [Fo(s)]
                                ))
                              : Do("v-if", !0),
                            Po(
                              "button",
                              {
                                class: "wl-like",
                                onClick: t[1] || (t[1] = t => e.$emit("like", e.comment)),
                                title: e.like ? e.locale.cancelLike : e.locale.like,
                              },
                              [
                                Fo(a, { active: e.like }, null, 8, ["active"]),
                                "like" in e.comment
                                  ? (zo(),
                                    Lo(
                                      "span",
                                      { key: 0, textContent: A(e.comment.like) },
                                      null,
                                      8,
                                      _a
                                    ))
                                  : Do("v-if", !0),
                              ],
                              8,
                              xa
                            ),
                            Po(
                              "button",
                              {
                                class: z(["wl-reply", { active: e.isReplyingCurrent }]),
                                title: e.isReplyingCurrent ? e.locale.cancelReply : e.locale.reply,
                                onClick:
                                  t[2] ||
                                  (t[2] = t =>
                                    e.$emit("reply", e.isReplyingCurrent ? null : e.comment)),
                              },
                              [Fo(c)],
                              10,
                              Sa
                            ),
                          ]),
                        ]),
                        Po("div", Ca, [
                          e.comment.addr
                            ? (zo(),
                              Lo("span", { key: 0, textContent: A(e.comment.addr) }, null, 8, Ia))
                            : Do("v-if", !0),
                          e.comment.browser
                            ? (zo(),
                              Lo(
                                "span",
                                { key: 1, textContent: A(e.comment.browser) },
                                null,
                                8,
                                za
                              ))
                            : Do("v-if", !0),
                          e.comment.os
                            ? (zo(),
                              Lo("span", { key: 2, textContent: A(e.comment.os) }, null, 8, Ra))
                            : Do("v-if", !0),
                        ]),
                        Po(
                          "div",
                          { class: "wl-content", innerHTML: e.comment.comment },
                          null,
                          8,
                          Ea
                        ),
                        e.isAdmin
                          ? (zo(),
                            Lo("div", Aa, [
                              Po("span", La, [
                                (zo(!0),
                                Lo(
                                  bo,
                                  null,
                                  Zn(
                                    e.commentStatus,
                                    t => (
                                      zo(),
                                      Lo(
                                        "button",
                                        {
                                          key: t,
                                          class: z("wl-btn wl-".concat(t)),
                                          disabled: e.comment.status === t,
                                          onClick: n =>
                                            e.$emit("status", { status: t, comment: e.comment }),
                                          textContent: A(t),
                                        },
                                        null,
                                        10,
                                        Ta
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              e.isAdmin && !e.comment.rid
                                ? (zo(),
                                  Lo(
                                    "button",
                                    {
                                      key: 0,
                                      class: "wl-btn wl-sticky",
                                      onClick: t[3] || (t[3] = t => e.$emit("sticky", e.comment)),
                                    },
                                    A(e.comment.sticky ? "unsticky" : "sticky"),
                                    1
                                  ))
                                : Do("v-if", !0),
                            ]))
                          : Do("v-if", !0),
                        e.isReplyingCurrent
                          ? (zo(),
                            Lo("div", ja, [
                              Fo(
                                u,
                                {
                                  replyId: e.comment.objectId,
                                  replyUser: e.comment.nick,
                                  rootId: e.rootId,
                                  onSubmit: t[4] || (t[4] = t => e.$emit("submit", t)),
                                  onCancelReply: t[5] || (t[5] = t => e.$emit("reply", null)),
                                },
                                null,
                                8,
                                ["replyId", "replyUser", "rootId"]
                              ),
                            ]))
                          : Do("v-if", !0),
                        e.comment.children
                          ? (zo(),
                            Lo("div", $a, [
                              (zo(!0),
                              Lo(
                                bo,
                                null,
                                Zn(
                                  e.comment.children,
                                  n => (
                                    zo(),
                                    To(
                                      p,
                                      {
                                        key: n.objectId,
                                        comment: n,
                                        reply: e.reply,
                                        rootId: e.rootId,
                                        onReply: t[6] || (t[6] = t => e.$emit("reply", t)),
                                        onSubmit: t[7] || (t[7] = t => e.$emit("submit", t)),
                                        onLike: t[8] || (t[8] = t => e.$emit("like", t)),
                                        onDelete: t[9] || (t[9] = t => e.$emit("delete", t)),
                                        onStatus: t[10] || (t[10] = t => e.$emit("status", t)),
                                        onSticky: t[11] || (t[11] = t => e.$emit("sticky", t)),
                                      },
                                      null,
                                      8,
                                      ["comment", "reply", "rootId"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]))
                          : Do("v-if", !0),
                      ]),
                    ],
                    8,
                    ca
                  )
                );
              },
            ],
            ["__file", "CommentCard.vue"],
          ]),
          LoadingIcon: ys,
        },
        props: [
          "serverURL",
          "path",
          "meta",
          "requiredMeta",
          "dark",
          "lang",
          "locale",
          "pageSize",
          "wordLimit",
          "emoji",
          "login",
          "highlighter",
          "texRenderer",
          "imageUploader",
          "copyright",
        ],
        setup(e) {
          const t = ar(() =>
              (e => {
                let {
                  serverURL: t,
                  path: s = location.pathname,
                  lang: a = o,
                  locale: c,
                  emoji: p = ["//unpkg.com/@waline/emojis@1.0.1/weibo"],
                  meta: d = ["nick", "mail", "link"],
                  requiredMeta: h = [],
                  dark: f = !1,
                  pageSize: g = 10,
                  wordLimit: m,
                  imageUploader: v,
                  highlighter: y,
                  texRenderer: k,
                  copyright: b = !0,
                  login: x = "enable",
                  search: _ = i(),
                  ...S
                } = e;
                return {
                  serverURL: Ql(t),
                  path: Gl(s),
                  locale: { ...(w[a] || w[o]), ...("object" == typeof c ? c : {}) },
                  wordLimit: Yl(m),
                  meta: n(d),
                  requiredMeta: n(h),
                  imageUploader: Xl(v, r),
                  highlighter: Xl(y, u),
                  texRenderer: Xl(k, l),
                  lang: a,
                  dark: f,
                  emoji: p,
                  pageSize: g,
                  login: x,
                  copyright: b,
                  search: _,
                  ...S,
                };
              })(e)
            ),
            s = is(),
            a = as(),
            c = Ut("loading"),
            p = Ut(0),
            d = Ut(1),
            h = Ut(0),
            f = Ut([]),
            g = Ut(null),
            m = ar(() => {
              return "string" == typeof (e = t.value.dark)
                ? "auto" === e
                  ? "@media(prefers-color-scheme:dark){body".concat(ei, "}")
                  : "".concat(e).concat(ei)
                : !0 === e
                ? ":root".concat(ei)
                : "";
            });
          let v;
          !(function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const n = Ut(!1),
              {
                document: o = El,
                immediate: r = !0,
                manual: l = !1,
                id: i = "vueuse_styletag_".concat(++Zl),
              } = t,
              s = Ut(e);
            let a = () => {};
            const c = () => {
                if (!o) return;
                const e = o.getElementById(i) || o.createElement("style");
                (e.type = "text/css"),
                  (e.id = i),
                  t.media && (e.media = t.media),
                  o.head.appendChild(e),
                  n.value ||
                    ((a = Ln(
                      s,
                      t => {
                        e.innerText = t;
                      },
                      { immediate: !0 }
                    )),
                    (n.value = !0));
              },
              u = () => {
                o && n.value && (a(), o.head.removeChild(o.getElementById(i)), (n.value = !1));
              };
            r && !l && c(), l || tl(u), _t(n);
          })(m);
          const y = e => {
              var n, o;
              const { serverURL: r, path: l, pageSize: i } = t.value,
                a = new AbortController();
              (c.value = "loading"),
                null === (n = v) || void 0 === n || n(),
                (e => {
                  let {
                    serverURL: t,
                    lang: n,
                    path: o,
                    page: r,
                    pageSize: l,
                    signal: i,
                    token: s,
                  } = e;
                  const a = {};
                  return (
                    s && (a.Authorization = "Bearer ".concat(s)),
                    fetch(
                      ""
                        .concat(t, "/comment?path=")
                        .concat(encodeURIComponent(o), "&pageSize=")
                        .concat(l, "&page=")
                        .concat(r, "&lang=")
                        .concat(n),
                      { signal: i, headers: a }
                    )
                      .then(e => e.json())
                      .then(e => si(e, "comment list"))
                  );
                })({
                  serverURL: r,
                  lang: t.value.lang,
                  path: l,
                  pageSize: i,
                  page: e,
                  signal: a.signal,
                  token: null === (o = s.value) || void 0 === o ? void 0 : o.token,
                })
                  .then(t => {
                    (c.value = "success"),
                      (p.value = t.count),
                      f.value.push(...t.data),
                      (d.value = e),
                      (h.value = t.totalPages);
                  })
                  .catch(e => {
                    "AbortError" !== e.name && (console.error(e.message), (c.value = "error"));
                  }),
                (v = a.abort.bind(a));
            },
            k = () => {
              (p.value = 0), (f.value = []), y(1);
            };
          return (
            (function (e, t) {
              if (Qo) {
                let n = Qo.provides;
                const o = Qo.parent && Qo.parent.provides;
                o === n && (n = Qo.provides = Object.create(o)), (n[e] = t);
              }
            })("config", t),
            Ln(() => e.path, k),
            Pn(() => k()),
            {
              config: t,
              darkmodeStyle: m,
              i18n: ar(() => t.value.locale),
              status: c,
              count: p,
              page: d,
              totalPages: h,
              data: f,
              reply: g,
              loadMore: () => y(d.value + 1),
              refresh: k,
              onReply: e => {
                g.value = e;
              },
              onSubmit: e => {
                if (e.rid) {
                  const t = f.value.find(t => {
                    let { objectId: n } = t;
                    return n === e.rid;
                  });
                  if (!t) return;
                  Array.isArray(t.children) || (t.children = []), t.children.push(e);
                } else f.value.unshift(e);
              },
              onStatusChange: async e => {
                var n;
                let { comment: o, status: r } = e;
                if (o.status === r) return;
                const { serverURL: l, lang: i } = t.value;
                await ai({
                  serverURL: l,
                  lang: i,
                  token: null === (n = s.value) || void 0 === n ? void 0 : n.token,
                  objectId: o.objectId,
                  status: r,
                }),
                  (o.status = r);
              },
              onDelete: async e => {
                var n;
                let { objectId: o } = e;
                if (!confirm("Are you sure you want to delete this comment?")) return;
                const { serverURL: r, lang: l } = t.value;
                await (e => {
                  let { serverURL: t, lang: n, token: o, objectId: r } = e;
                  const l = { Authorization: "Bearer ".concat(o) };
                  return fetch("".concat(t, "/comment/").concat(r, "?lang=").concat(n), {
                    method: "DELETE",
                    headers: l,
                  }).then(e => e.json());
                })({
                  serverURL: r,
                  lang: l,
                  token: null === (n = s.value) || void 0 === n ? void 0 : n.token,
                  objectId: o,
                }),
                  f.value.some((e, t) =>
                    e.objectId === o
                      ? ((f.value = f.value.filter((e, n) => n !== t)), !0)
                      : e.children.some(
                          (n, r) =>
                            n.objectId === o &&
                            ((f.value[t].children = e.children.filter((e, t) => t !== r)), !0)
                        )
                  );
              },
              onSticky: async e => {
                var n;
                if (e.rid) return;
                const { serverURL: o, lang: r } = t.value;
                await ai({
                  serverURL: o,
                  lang: r,
                  token: null === (n = s.value) || void 0 === n ? void 0 : n.token,
                  objectId: e.objectId,
                  sticky: e.sticky ? 0 : 1,
                }),
                  (e.sticky = !e.sticky);
              },
              onLike: async e => {
                const { serverURL: n, lang: o } = t.value,
                  { objectId: r } = e,
                  l = a.value.includes(r);
                await (e => {
                  let { serverURL: t, lang: n, objectId: o, like: r } = e;
                  return fetch("".concat(t, "/comment/").concat(o, "?lang=").concat(n), {
                    method: "PUT",
                    headers: ii,
                    body: JSON.stringify({ like: r }),
                  }).then(e => e.json());
                })({ serverURL: n, lang: o, objectId: r, like: !l }),
                  l
                    ? (a.value = a.value.filter(e => e !== r))
                    : ((a.value = [...a.value, r]),
                      a.value.length > 50 && (a.value = a.value.slice(-50))),
                  (e.like = (e.like || 0) + (l ? -1 : 1));
              },
              version: "2.6.1",
            }
          );
        },
      }),
      Ua = { "data-waline": "" },
      Ma = { class: "wl-count" },
      Pa = ["textContent"],
      Fa = { class: "wl-cards" },
      Na = { key: 1, class: "wl-operation" },
      Va = ["textContent"],
      Ba = { key: 0, class: "wl-loading" },
      Da = ["textContent"],
      Ha = { class: "wl-operation" },
      Wa = ["textContent"],
      qa = { key: 3, class: "wl-power" },
      Za = Bo(" Powered by "),
      Ga = Po(
        "a",
        { href: "https://github.com/walinejs/waline", target: "_blank", rel: "noreferrer" },
        " Waline ",
        -1
      );
    var Ja = ws(Oa, [
      [
        "render",
        function (e, t, n, o, r, l) {
          const i = Hn("CommentBox"),
            s = Hn("CommentCard"),
            a = Hn("LoadingIcon");
          return (
            zo(),
            Lo("div", Ua, [
              e.reply
                ? Do("v-if", !0)
                : (zo(), To(i, { key: 0, onSubmit: e.onSubmit }, null, 8, ["onSubmit"])),
              Po("div", Ma, [
                e.count
                  ? (zo(),
                    Lo("span", { key: 0, class: "wl-num", textContent: A(e.count) }, null, 8, Pa))
                  : Do("v-if", !0),
                Bo(" " + A(e.i18n.comment), 1),
              ]),
              Po("div", Fa, [
                (zo(!0),
                Lo(
                  bo,
                  null,
                  Zn(
                    e.data,
                    t => (
                      zo(),
                      To(
                        s,
                        {
                          key: t.objectId,
                          "root-id": t.objectId,
                          comment: t,
                          reply: e.reply,
                          onReply: e.onReply,
                          onSubmit: e.onSubmit,
                          onStatus: e.onStatusChange,
                          onDelete: e.onDelete,
                          onSticky: e.onSticky,
                          onLike: e.onLike,
                        },
                        null,
                        8,
                        [
                          "root-id",
                          "comment",
                          "reply",
                          "onReply",
                          "onSubmit",
                          "onStatus",
                          "onDelete",
                          "onSticky",
                          "onLike",
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
              "error" === e.status
                ? (zo(),
                  Lo("div", Na, [
                    Po(
                      "button",
                      {
                        type: "button",
                        class: "wl-btn",
                        onClick:
                          t[0] ||
                          (t[0] = function () {
                            return e.refresh && e.refresh(...arguments);
                          }),
                        textContent: A(e.i18n.refresh),
                      },
                      null,
                      8,
                      Va
                    ),
                  ]))
                : (zo(),
                  Lo(
                    bo,
                    { key: 2 },
                    [
                      "loading" === e.status
                        ? (zo(), Lo("div", Ba, [Fo(a, { size: 30 })]))
                        : e.data.length
                        ? e.page < e.totalPages
                          ? (zo(),
                            Lo(
                              bo,
                              { key: 2 },
                              [
                                Do(" Load more button "),
                                Po("div", Ha, [
                                  Po(
                                    "button",
                                    {
                                      type: "button",
                                      class: "wl-btn",
                                      onClick:
                                        t[1] ||
                                        (t[1] = function () {
                                          return e.loadMore && e.loadMore(...arguments);
                                        }),
                                      textContent: A(e.i18n.more),
                                    },
                                    null,
                                    8,
                                    Wa
                                  ),
                                ]),
                              ],
                              2112
                            ))
                          : Do("v-if", !0)
                        : (zo(),
                          Lo(
                            "div",
                            { key: 1, class: "wl-empty", textContent: A(e.i18n.sofa) },
                            null,
                            8,
                            Da
                          )),
                    ],
                    64
                  )),
              Do(" Copyright Information "),
              e.config.copyright
                ? (zo(), Lo("div", qa, [Za, Ga, Bo(" v" + A(e.version), 1)]))
                : Do("v-if", !0),
            ])
          );
        },
      ],
      ["__file", "Waline.vue"],
    ]);
    const Ka = (e, t) => {
        t.forEach((t, n) => {
          t.innerText = e[n].toString();
        });
      },
      Qa = e => {
        let {
          serverURL: t,
          path: n = window.location.pathname,
          selector: o = ".waline-pageview-count",
          update: r = !0,
          lang: l = "zh-CN",
        } = e;
        const i = new AbortController(),
          s = Array.from(document.querySelectorAll(o)),
          a = e => {
            const t = os(e);
            return null !== t && n !== t;
          },
          c = e =>
            ci({ serverURL: Ql(t), paths: e.map(e => os(e) || n), lang: l, signal: i.signal })
              .then(t => Ka(t, e))
              .catch(li);
        if (r) {
          const e = s.filter(e => !a(e)),
            o = s.filter(a);
          ui({ serverURL: Ql(t), path: n, lang: l }).then(t => Ka(new Array(e.length).fill(t), e)),
            o.length && c(o);
        } else c(s);
        return i.abort.bind(i);
      };
    e.pageviewCount = Qa;
    e.init = e => {
      let {
        el: t = "#waline",
        path: n = window.location.pathname,
        comment: o = !1,
        pageview: r = !1,
        ...l
      } = e;
      const i = t ? pi(t) : null;
      if (t && !i) throw new Error("Option 'el' do not match any domElement!");
      if (!l.serverURL) throw new Error("Option 'serverURL' is missing!");
      const s = bt({ ...l }),
        a = bt({ comment: o, pageview: r, path: n }),
        c = i
          ? (function () {
              const e = Xr().createApp(...arguments),
                { mount: t } = e;
              return (
                (e.mount = n => {
                  const o = el(n);
                  if (!o) return;
                  const r = e._component;
                  Z(r) || r.render || r.template || (r.template = o.innerHTML), (o.innerHTML = "");
                  const l = t(o, !1, o instanceof SVGElement);
                  return (
                    o instanceof Element &&
                      (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")),
                    l
                  );
                }),
                e
              );
            })(() => cr(Ja, { path: a.path, ...s }))
          : null;
      c && c.mount(i);
      const u = En(() => {
          a.comment &&
            cs({
              serverURL: s.serverURL,
              path: a.path,
              selector: "string" == typeof a.comment ? a.comment : void 0,
            });
        }),
        p = En(() => {
          a.pageview &&
            Qa({
              serverURL: s.serverURL,
              path: a.path,
              selector: "string" == typeof a.pageview ? a.pageview : void 0,
            });
        });
      return {
        el: i,
        update: function () {
          let {
            comment: e,
            pageview: t,
            path: n = window.location.pathname,
            ...o
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          Object.entries(o).forEach(e => {
            let [t, n] = e;
            s[t] = n;
          }),
            (a.path = n),
            void 0 !== e && (a.comment = e),
            void 0 !== t && (a.pageview = t);
        },
        destroy: () => {
          null == c || c.unmount(), u(), p();
        },
      };
    };
    e.version = "2.6.1";
    e.RecentComments = e => {
      var t;
      let { el: n, serverURL: o, count: r, lang: l = "zh-CN" } = e;
      const i = is(),
        s = pi(n),
        a = new AbortController();
      return (e => {
        let { serverURL: t, lang: n, count: o, signal: r, token: l } = e;
        const i = {};
        return (
          l && (i.Authorization = "Bearer ".concat(l)),
          fetch("".concat(t, "/comment?type=recent&count=").concat(o, "&lang=").concat(n), {
            signal: r,
            headers: i,
          })
            .then(e => e.json())
            .then(e => si(e, "recent comment"))
        );
      })({
        serverURL: o,
        count: r,
        lang: l,
        signal: a.signal,
        token: null === (t = i.value) || void 0 === t ? void 0 : t.token,
      }).then(e =>
        s && e.length
          ? ((s.innerHTML = '<ul class="wl-recent-list">'.concat(
              e
                .map(e =>
                  '<li class="wl-recent-item"><a href="'
                    .concat(e.url, '">')
                    .concat(e.nick, "</a>：")
                    .concat(e.comment, "</li>")
                )
                .join(""),
              "</ul>"
            )),
            {
              comments: e,
              destroy: () => {
                a.abort(), (s.innerHTML = "");
              },
            })
          : { comments: e, destroy: () => a.abort() }
      );
    };
  }
);
//# sourceMappingURL=waline.js.map
