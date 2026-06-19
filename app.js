const DB_NAME = "private-camera-pwa";
const DB_VERSION = 1;
const PHOTO_STORE = "photos";
const VIDEO_STORE = "videos";
const APP_NAME = "ChispaChat";
const APP_VERSION = "v9";
const HIGH_QUALITY_VIDEO = {
  facingMode: { ideal: "environment" },
  width: { ideal: 3840 },
  height: { ideal: 2160 },
  frameRate: { ideal: 60 },
};
const HD_QUALITY_VIDEO = {
  facingMode: { ideal: "environment" },
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 60 },
};
const FALLBACK_VIDEO = {
  facingMode: { ideal: "environment" },
  width: { ideal: 1280 },
  height: { ideal: 720 },
  frameRate: { ideal: 30 },
};
const RECORDING_BITS_PER_SECOND = 50_000_000;
const RECORD_AUDIO = false;
const STATIC_CHATS = {
  portal: {
    title: "Grupo del portal",
    subtitle: "4 participantes",
    avatar: "N",
    avatarClass: "avatar-muted",
    messages: [
      ["incoming", "Estimados vecinos, les informo de que el técnico acudirá mañana entre las 10:00 y las 12:00. 🛠️", "09:14"],
      ["outgoing", "Perfecto, muchas gracias por el aviso. Estaré pendiente por si necesitan acceso al cuarto común. 👍", "09:17"],
      ["incoming", "Muy amable. En principio no debería ser necesario, pero lo tendremos en cuenta.", "09:19"],
      ["incoming", "Asimismo, se ruega no dejar bicicletas en el descansillo durante la intervención. 🚲", "09:20"],
      ["outgoing", "Recibido. Lo comunico también a mi compañero de piso.", "09:21"],
    ],
    replies: [
      "Muchas gracias por la rápida respuesta. Queda todo correctamente anotado. ✅",
      "Perfecto, mantendremos informada a la comunidad si hubiera algún cambio.",
      "Agradecemos la colaboración. Que tenga un buen día. 🙂",
    ],
  },
  plan: {
    title: "Plan improvisado",
    subtitle: "últ. vez hoy a las 11:48",
    avatar: "R",
    avatarClass: "avatar-muted alt",
    messages: [
      ["incoming", "Buenas tardes. ¿Le parecería oportuno quedar a las 19:30 en la entrada principal? 🙂", "16:02"],
      ["outgoing", "Me parece muy bien. Llegaré con unos minutos de antelación para evitar retrasos.", "16:05"],
      ["incoming", "Excelente. En ese caso, procedo a reservar mesa para dos personas.", "16:07"],
      ["outgoing", "Muchas gracias. Si hubiera cualquier cambio, le aviso inmediatamente.", "16:08"],
      ["incoming", "Perfecto, quedo atento. ✨", "16:09"],
    ],
    replies: [
      "Estupendo, entonces lo dejamos confirmado de ese modo. ✨",
      "Le aviso con antelación si se produce cualquier modificación.",
      "Muchas gracias, nos vemos en el punto acordado. 🙂",
    ],
  },
  soporte: {
    title: "Soporte Premium",
    subtitle: "equipo verificado",
    avatar: "S",
    avatarClass: "avatar-amber",
    messages: [
      ["incoming", "Estimado usuario, hemos revisado su solicitud y confirmamos que el caso queda registrado correctamente. ✅", "08:31"],
      ["outgoing", "Gracias por la confirmación. ¿Podrían indicarme el plazo estimado de resolución?", "08:34"],
      ["incoming", "Por supuesto. El plazo estimado es de 24 a 48 horas laborables.", "08:36"],
      ["incoming", "Le mantendremos informado ante cualquier actualización relevante. 📩", "08:36"],
      ["outgoing", "Quedo a la espera. Muchas gracias por la atención prestada.", "08:40"],
    ],
    replies: [
      "Gracias a usted. Hemos añadido su comentario al expediente correspondiente. 📌",
      "Nuestro equipo revisará la información y le responderá por este mismo canal.",
      "La solicitud continúa en seguimiento. Agradecemos su paciencia. ✅",
    ],
  },
  oficina: {
    title: "Oficina Central",
    subtitle: "en línea",
    avatar: "O",
    avatarClass: "avatar-indigo",
    messages: [
      ["incoming", "Buenos días. Adjuntamos el resumen revisado para su validación interna. 📎", "10:12"],
      ["outgoing", "Buenos días. Lo reviso durante la mañana y les traslado comentarios si fuera necesario.", "10:15"],
      ["incoming", "De acuerdo. Agradecemos especialmente que compruebe el apartado de observaciones.", "10:16"],
      ["outgoing", "Anotado. Haré énfasis en ese punto.", "10:18"],
      ["incoming", "Muchas gracias por su colaboración. 🤝", "10:19"],
    ],
    replies: [
      "Recibido. Incorporamos su respuesta al resumen de seguimiento.",
      "Quedamos atentos a cualquier comentario adicional que desee remitir.",
      "Muchas gracias. Procedemos conforme a lo acordado. 🤝",
    ],
  },
  vecina: {
    title: "Vecina 3B",
    subtitle: "últ. vez ayer a las 20:22",
    avatar: "V",
    avatarClass: "avatar-rose",
    messages: [
      ["incoming", "Disculpa la molestia. He visto que el paquete quedó en recepción y quería avisarte. 📦", "18:44"],
      ["outgoing", "Muchísimas gracias por avisar. Pasaré a recogerlo en cuanto llegue.", "18:49"],
      ["incoming", "Sin problema. Lo dejé apartado para que no se extraviara.", "18:50"],
      ["outgoing", "Muy amable de tu parte. Te debo un café. ☕", "18:51"],
      ["incoming", "Acepto encantada, pero sin compromiso. 😊", "18:52"],
    ],
    replies: [
      "Perfecto, no te preocupes. Me alegra que haya quedado resuelto. 😊",
      "Si necesitas cualquier cosa, me dices sin problema.",
      "Gracias de nuevo por avisar con tanta rapidez. ✨",
    ],
  },
  banco: {
    title: "Gestoría Banco",
    subtitle: "canal seguro",
    avatar: "B",
    avatarClass: "avatar-slate",
    messages: [
      ["incoming", "Le confirmamos la recepción de la documentación solicitada. 🧾", "13:03"],
      ["outgoing", "Muchas gracias. ¿Falta algún justificante adicional?", "13:07"],
      ["incoming", "Por el momento, la documentación está completa y pasa a revisión.", "13:12"],
      ["incoming", "Si necesitáramos información adicional, se lo comunicaríamos por este mismo canal.", "13:12"],
      ["outgoing", "Perfecto. Quedo atento a cualquier novedad.", "13:15"],
    ],
    replies: [
      "Le confirmamos que su última indicación queda registrada correctamente.",
      "Continuaremos con la revisión y le notificaremos cualquier avance relevante.",
      "Gracias por su colaboración. ✅",
    ],
  },
};

const els = {
  chatList: document.querySelector(".chat-list"),
  cameraPreview: document.getElementById("cameraPreview"),
  photoCanvas: document.getElementById("photoCanvas"),
  statusMessage: document.getElementById("statusMessage"),
  privacyNotice: document.getElementById("privacyNotice"),
  dismissNoticeButton: document.getElementById("dismissNoticeButton"),
  photoChat: document.getElementById("photoChat"),
  videoChat: document.getElementById("videoChat"),
  photoLastMessage: document.getElementById("photoLastMessage"),
  videoLastMessage: document.getElementById("videoLastMessage"),
  photoMeta: document.getElementById("photoMeta"),
  videoMeta: document.getElementById("videoMeta"),
  zoomStories: document.getElementById("zoomStories"),
  openGalleryButton: document.getElementById("openGalleryButton"),
  galleryDialog: document.getElementById("galleryDialog"),
  refreshGalleryButton: document.getElementById("refreshGalleryButton"),
  clearGalleryButton: document.getElementById("clearGalleryButton"),
  galleryEmpty: document.getElementById("galleryEmpty"),
  galleryList: document.getElementById("galleryList"),
  chatDialog: document.getElementById("chatDialog"),
  chatDialogAvatar: document.getElementById("chatDialogAvatar"),
  chatDialogTitle: document.getElementById("chatDialogTitle"),
  chatDialogSubtitle: document.getElementById("chatDialogSubtitle"),
  chatMessages: document.getElementById("chatMessages"),
  chatComposer: document.getElementById("chatComposer"),
  chatInput: document.getElementById("chatInput"),
};

let dbPromise;
let cameraStream;
let mediaRecorder;
let recordedChunks = [];
let recordingStartedAt = 0;
let isRecording = false;
let activeStaticChatId = "";
const staticReplyIndexes = {};

init();

// Arranque: registra la PWA, prepara IndexedDB y enlaza eventos de la interfaz.
function init() {
  registerServiceWorker();
  dbPromise = openDatabase();

  if (localStorage.getItem("privateNotesPrivacySeen") === "1") {
    els.privacyNotice.hidden = true;
  }

  els.dismissNoticeButton.addEventListener("click", () => {
    localStorage.setItem("privateNotesPrivacySeen", "1");
    els.privacyNotice.hidden = true;
  });

  els.photoChat.addEventListener("click", capturePhoto);
  els.videoChat.addEventListener("click", toggleRecording);
  els.zoomStories.addEventListener("click", handleZoomStoryClick);
  els.chatList.addEventListener("click", handleStaticChatClick);
  els.chatComposer.addEventListener("submit", handleStaticChatSubmit);
  els.openGalleryButton.addEventListener("click", openGallery);
  els.refreshGalleryButton.addEventListener("click", renderGallery);
  els.clearGalleryButton.addEventListener("click", clearGallery);

  if (!("mediaDevices" in navigator) || !navigator.mediaDevices.getUserMedia) {
    setStatus("No se pudo abrir este chat en este dispositivo.", true);
  } else {
    warmCameraOnStartup();
  }
}

// Service worker mínimo para que la app pueda abrir como PWA estática.
function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      setStatus("Modo ligero activado.", true);
    });
  });
}

// IndexedDB guarda los Blob localmente. No hay backend ni llamadas externas.
function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB no está disponible o está bloqueado."));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        db.createObjectStore(PHOTO_STORE, { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(VIDEO_STORE)) {
        db.createObjectStore(VIDEO_STORE, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("No se pudo abrir IndexedDB."));
  });
}

// Safari iOS exige que getUserMedia ocurra tras una acción del usuario.
async function getCameraStream({ audio = false } = {}) {
  const liveVideo = cameraStream?.getVideoTracks().some((track) => track.readyState === "live");
  const liveAudio = cameraStream?.getAudioTracks().some((track) => track.readyState === "live");

  if (liveVideo && (!audio || liveAudio)) {
    return cameraStream;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("Este navegador no soporta acceso a cámara con getUserMedia.");
  }

  stopCameraStream();

  try {
    cameraStream = await getBestVideoStream(audio);
  } catch (error) {
    if (!audio) {
      cameraStream = await getBestVideoStream(false);
    } else {
      // Si el permiso de micrófono bloquea vídeo en algún Safari, reintentamos solo cámara.
      cameraStream = await getBestVideoStream(false);
    }
  }

  els.cameraPreview.srcObject = cameraStream;
  await els.cameraPreview.play();
  return cameraStream;
}

async function getBestVideoStream(audio) {
  const profiles = [HIGH_QUALITY_VIDEO, HD_QUALITY_VIDEO, FALLBACK_VIDEO];
  let lastError;

  for (const video of profiles) {
    try {
      return await navigator.mediaDevices.getUserMedia({ audio, video });
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("No se pudo abrir este chat.");
}

function stopCameraStream() {
  if (!cameraStream) return;
  cameraStream.getTracks().forEach((track) => track.stop());
  cameraStream = null;
}

function stopAudioTracks() {
  if (!cameraStream) return;
  cameraStream.getAudioTracks().forEach((track) => track.stop());
}

async function capturePhoto() {
  try {
    setStatus("Abriendo conversación...");
    const stream = await getCameraStream({ audio: false });
    const videoTrack = stream.getVideoTracks()[0];
    if (!videoTrack) throw new Error("No hay pista de vídeo disponible.");

    await waitForVideoFrame();
    const video = els.cameraPreview;
    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;
    const canvas = els.photoCanvas;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(video, 0, 0, width, height);

    const blob = await canvasToBlob(canvas, "image/jpeg", 0.92);
    await saveItem(PHOTO_STORE, {
      type: "photo",
      blob,
      mimeType: blob.type || "image/jpeg",
      createdAt: new Date().toISOString(),
    });

    const time = formatTime(new Date());
    els.photoLastMessage.textContent = `recibido · ${time}`;
    els.photoMeta.textContent = time;
    setStatus("Chat actualizado.");
  } catch (error) {
    handleCameraError(error, "No se pudo guardar la foto.");
  }
}

async function warmCameraOnStartup() {
  try {
    setStatus("Preparando chats...");
    await getCameraStream({ audio: false });
    setStatus("Chats listos.");
  } catch (error) {
    setStatus("Chats actualizados.");
    document.addEventListener("pointerdown", warmCameraFromFirstTouch, { once: true });
  }
}

async function warmCameraFromFirstTouch(event) {
  if (isRecording) return;
  if (event.target.closest?.(".action-row")) return;
  try {
    await getCameraStream({ audio: false });
    setStatus("Chats listos.");
  } catch (error) {
    setStatus("Toca una conversación para continuar.", true);
  }
}

// MediaRecorder puede no existir o fallar en algunas versiones de Safari iOS.
async function toggleRecording() {
  if (isRecording) {
    stopRecording();
    return;
  }

  if (!("MediaRecorder" in window)) {
    setStatus("Esta función no está disponible en este dispositivo.", true);
    return;
  }

  try {
    setStatus("Abriendo conversación...");
    const stream = await getCameraStream({ audio: RECORD_AUDIO });
    const mimeType = chooseVideoMimeType();
    recordedChunks = [];
    recordingStartedAt = Date.now();
    mediaRecorder = createRecorder(stream, mimeType);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) recordedChunks.push(event.data);
    };

    mediaRecorder.onerror = () => {
      setStatus("No se pudo completar la acción.", true);
      resetRecordingUi();
    };

    mediaRecorder.onstop = saveRecording;
    mediaRecorder.start();
    isRecording = true;
    els.videoLastMessage.textContent = "escribiendo...";
    els.videoMeta.textContent = "";
    els.zoomStories.hidden = false;
    setActiveZoomButton(1);
    await setCameraZoom(1, { silent: true });
    setStatus("escribiendo...");
  } catch (error) {
    handleCameraError(error, "No se pudo iniciar la grabación.");
    resetRecordingUi();
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
}

async function saveRecording() {
  try {
    const endedAt = Date.now();
    const duration = Math.max(0, Math.round((endedAt - recordingStartedAt) / 1000));
    const mimeType = mediaRecorder?.mimeType || recordedChunks[0]?.type || "video/mp4";
    const blob = new Blob(recordedChunks, { type: mimeType });

    if (!blob.size) {
      throw new Error("La grabación no generó datos.");
    }

    await saveItem(VIDEO_STORE, {
      type: "video",
      blob,
      mimeType,
      createdAt: new Date(recordingStartedAt).toISOString(),
      endedAt: new Date(endedAt).toISOString(),
      duration,
    });

    els.videoLastMessage.textContent = `nota enviada · ${formatDuration(duration)}`;
    els.videoMeta.textContent = formatTime(new Date());
    setStatus("Mensaje enviado.");
  } catch (error) {
    setStatus(`No se pudo completar: ${friendlyStorageMessage(error)}`, true);
  } finally {
    resetRecordingUi(false);
    stopAudioTracks();
  }
}

function resetRecordingUi(updateMessage = true) {
  isRecording = false;
  mediaRecorder = null;
  recordedChunks = [];
  recordingStartedAt = 0;

  if (updateMessage) {
    els.videoLastMessage.textContent = "nota pendiente";
    els.videoMeta.textContent = "local";
  }
  els.zoomStories.hidden = true;
}

function chooseVideoMimeType() {
  const candidates = [
    "video/mp4;codecs=h264",
    "video/mp4",
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
  ];

  return candidates.find((candidate) => MediaRecorder.isTypeSupported?.(candidate)) || "";
}

function createRecorder(stream, mimeType) {
  const options = {
    videoBitsPerSecond: RECORDING_BITS_PER_SECOND,
    audioBitsPerSecond: 128_000,
  };

  if (mimeType) options.mimeType = mimeType;

  try {
    return new MediaRecorder(stream, options);
  } catch (error) {
    return mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
  }
}

function describeTrackQuality(track) {
  const settings = track?.getSettings?.() || {};
  const width = settings.width ? `${settings.width}` : "?";
  const height = settings.height ? `${settings.height}` : "?";
  const fps = settings.frameRate ? `${Math.round(settings.frameRate)} fps` : "fps según Safari";
  return `${width}x${height} · ${fps}`;
}

async function handleZoomStoryClick(event) {
  const button = event.target.closest?.("[data-zoom]");
  if (!button) return;
  await setCameraZoom(Number(button.dataset.zoom));
}

async function setCameraZoom(requestedZoom, { silent = false } = {}) {
  const track = cameraStream?.getVideoTracks()[0];
  if (!track?.applyConstraints) {
    if (!silent) setStatus("Ese story no está disponible aquí.", true);
    return false;
  }

  const capabilities = track.getCapabilities?.() || {};
  if (!("zoom" in capabilities)) {
    if (!silent) setStatus("Ese story no está disponible aquí.", true);
    return false;
  }

  const min = typeof capabilities.zoom.min === "number" ? capabilities.zoom.min : 1;
  const max = typeof capabilities.zoom.max === "number" ? capabilities.zoom.max : requestedZoom;
  const zoom = Math.min(Math.max(requestedZoom, min), max);

  try {
    await track.applyConstraints({ advanced: [{ zoom }] });
    setActiveZoomButton(requestedZoom);
    if (!silent) {
      setStatus("Story actualizado.");
    }
    return true;
  } catch (error) {
    if (!silent) setStatus("No se pudo cambiar de story.", true);
    return false;
  }
}

function setActiveZoomButton(zoom) {
  els.zoomStories.querySelectorAll("[data-zoom]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.zoom) === zoom);
  });
}

function handleStaticChatClick(event) {
  const row = event.target.closest?.(".static-chat-row");
  if (!row) return;
  openStaticChat(row.dataset.chatId);
}

function openStaticChat(chatId) {
  const chat = STATIC_CHATS[chatId];
  if (!chat) return;

  activeStaticChatId = chatId;
  els.chatDialogTitle.textContent = chat.title;
  els.chatDialogSubtitle.textContent = chat.subtitle;
  els.chatDialogAvatar.textContent = chat.avatar;
  els.chatDialogAvatar.className = `avatar ${chat.avatarClass}`;
  els.chatMessages.innerHTML = "";
  els.chatInput.value = "";

  for (const [direction, text, time] of chat.messages) {
    appendMessageBubble(direction, text, time);
  }

  if (typeof els.chatDialog.showModal === "function") {
    els.chatDialog.showModal();
  } else {
    els.chatDialog.setAttribute("open", "");
  }
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
  setTimeout(() => els.chatInput.focus(), 150);
}

function handleStaticChatSubmit(event) {
  event.preventDefault();
  const text = els.chatInput.value.trim();
  if (!text || !activeStaticChatId) return;

  appendMessageBubble("outgoing", text, formatTime(new Date()));
  els.chatInput.value = "";
  scrollChatToBottom();
  setStatus("Mensaje enviado.");

  const chat = STATIC_CHATS[activeStaticChatId];
  const typing = document.createElement("div");
  typing.className = "typing-bubble";
  typing.textContent = "escribiendo...";
  els.chatMessages.appendChild(typing);
  scrollChatToBottom();

  window.setTimeout(() => {
    typing.remove();
    const replies = chat.replies || ["Recibido. Muchas gracias. ✅"];
    const index = staticReplyIndexes[activeStaticChatId] || 0;
    const reply = replies[index % replies.length];
    staticReplyIndexes[activeStaticChatId] = index + 1;
    appendMessageBubble("incoming", reply, formatTime(new Date()));
    scrollChatToBottom();
    setStatus("Chat actualizado.");
  }, 850);
}

function appendMessageBubble(direction, text, time) {
  const bubble = document.createElement("div");
  bubble.className = `message-bubble ${direction}`;
  bubble.textContent = text;

  const stamp = document.createElement("span");
  stamp.className = "message-time";
  stamp.textContent = time;
  bubble.appendChild(stamp);

  els.chatMessages.appendChild(bubble);
}

function scrollChatToBottom() {
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function waitForVideoFrame() {
  const video = els.cameraPreview;
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.videoWidth) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const done = () => resolve();
    video.addEventListener("loadeddata", done, { once: true });
    setTimeout(done, 900);
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("No se pudo convertir la imagen a Blob."));
    }, type, quality);
  });
}

async function saveItem(storeName, item) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).add(item);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error || new Error("No se pudo escribir en IndexedDB."));
    tx.onabort = () => reject(tx.error || new Error("La operación de IndexedDB fue cancelada."));
  });
}

async function getAllItems(storeName) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const request = tx.objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error || new Error("No se pudo leer IndexedDB."));
  });
}

async function deleteItem(storeName, id) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).delete(id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error || new Error("No se pudo borrar el elemento."));
  });
}

async function clearStore(storeName) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).clear();
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error || new Error("No se pudo vaciar el almacén."));
  });
}

// La galería crea URLs temporales para previsualizar los Blob guardados.
async function openGallery() {
  if (typeof els.galleryDialog.showModal === "function") {
    els.galleryDialog.showModal();
  } else {
    els.galleryDialog.setAttribute("open", "");
  }
  await renderGallery();
}

async function renderGallery() {
  try {
    revokeGalleryUrls();
    els.galleryList.innerHTML = "";

    const [photos, videos] = await Promise.all([getAllItems(PHOTO_STORE), getAllItems(VIDEO_STORE)]);
    const items = [
      ...photos.map((item) => ({ ...item, storeName: PHOTO_STORE })),
      ...videos.map((item) => ({ ...item, storeName: VIDEO_STORE })),
    ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    els.galleryEmpty.hidden = items.length > 0;

    for (const item of items) {
      els.galleryList.appendChild(createGalleryItem(item));
    }
  } catch (error) {
    setStatus(`No se pudo abrir el archivo: ${friendlyStorageMessage(error)}`, true);
  }
}

function createGalleryItem(item) {
  const wrapper = document.createElement("article");
  wrapper.className = "gallery-item";

  const url = URL.createObjectURL(item.blob);
  wrapper.dataset.objectUrl = url;

  const media = document.createElement(item.type === "video" ? "video" : "img");
  media.className = "gallery-media";
  media.src = url;
  if (item.type === "video") media.controls = true;
  else media.alt = `Foto local guardada el ${formatDateTime(item.createdAt)}`;

  const info = document.createElement("div");
  info.className = "gallery-info";
  const text = document.createElement("span");
  text.textContent = item.type === "video"
    ? `Vídeo · ${formatDuration(item.duration || 0)} · ${formatDateTime(item.createdAt)}`
    : `Foto · ${formatDateTime(item.createdAt)}`;

  const buttons = document.createElement("div");
  buttons.className = "gallery-buttons";

  const shareButton = document.createElement("button");
  shareButton.className = "share-button";
  shareButton.type = "button";
  shareButton.textContent = item.type === "video" ? "Guardar" : "Compartir";
  shareButton.addEventListener("click", () => shareItem(item));

  const openLink = document.createElement("a");
  openLink.href = url;
  openLink.target = "_blank";
  openLink.rel = "noopener";
  openLink.textContent = "Abrir";
  openLink.addEventListener("click", () => {
    setStatus("Menú del sistema abierto.");
  });

  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = buildFileName(item);
  downloadLink.textContent = "Descargar";
  downloadLink.addEventListener("click", () => {
    setStatus("Opciones del sistema abiertas.");
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-item-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Borrar";
  deleteButton.addEventListener("click", async () => {
    await deleteItem(item.storeName, item.id);
    await renderGallery();
    setStatus("Mensaje retirado.");
  });

  info.append(text);
  buttons.append(shareButton, openLink, downloadLink, deleteButton);
  wrapper.append(media, info, buttons);
  return wrapper;
}

async function shareItem(item) {
  const file = new File([item.blob], buildFileName(item), {
    type: item.mimeType || item.blob.type || "application/octet-stream",
  });

  try {
    if (navigator.canShare?.({ files: [file] }) && navigator.share) {
      await navigator.share({
        files: [file],
        title: item.type === "video" ? "Vídeo local" : "Foto local",
        text: `Archivo guardado localmente desde ${APP_NAME}.`,
      });
      setStatus("Compartir abierto.");
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: item.type === "video" ? "Vídeo local" : "Foto local",
        text: "Este Safari no permite compartir este archivo directamente. Usa Abrir o Descargar.",
      });
      return;
    }

    setStatus("Compartir no está disponible aquí.", true);
  } catch (error) {
    if (error?.name === "AbortError") {
      setStatus("Acción cancelada.");
      return;
    }
    setStatus("No se pudo abrir compartir.", true);
  }
}

function buildFileName(item) {
  const stamp = new Date(item.createdAt).toISOString().replace(/[:.]/g, "-");
  const mime = item.mimeType || item.blob?.type || "";
  let extension = item.type === "photo" ? "jpg" : "mp4";

  if (mime.includes("png")) extension = "png";
  else if (mime.includes("webp")) extension = "webp";
  else if (mime.includes("webm")) extension = "webm";
  else if (mime.includes("mp4")) extension = "mp4";

  return `private-notes-${item.type}-${stamp}.${extension}`;
}

async function clearGallery() {
  const confirmed = window.confirm("¿Limpiar todo el historial de este dispositivo?");
  if (!confirmed) return;

  try {
    await Promise.all([clearStore(PHOTO_STORE), clearStore(VIDEO_STORE)]);
    await renderGallery();
    setStatus("Historial limpiado.");
  } catch (error) {
    setStatus(`No se pudo limpiar: ${friendlyStorageMessage(error)}`, true);
  }
}

function revokeGalleryUrls() {
  els.galleryList.querySelectorAll("[data-object-url]").forEach((node) => {
    URL.revokeObjectURL(node.dataset.objectUrl);
  });
}

function handleCameraError(error, fallback) {
  const name = error?.name || "";
  let message = fallback;

  if (name === "NotAllowedError" || name === "SecurityError") {
    message = "No se pudo abrir este chat. Revisa los permisos de Safari.";
  } else if (name === "NotFoundError" || name === "OverconstrainedError") {
    message = "Este chat no está disponible ahora mismo.";
  } else if (name === "NotReadableError") {
    message = "Este chat está ocupado. Inténtalo de nuevo.";
  } else if (String(error?.message || "").includes("IndexedDB")) {
    message = friendlyStorageMessage(error);
  }

  setStatus(message, true);
}

function friendlyStorageMessage(error) {
  const raw = `${error?.name || ""} ${error?.message || ""}`.trim();
  if (/quota|storage|disk|full/i.test(raw)) {
    return "el almacenamiento local parece estar lleno o bloqueado.";
  }
  if (/indexeddb/i.test(raw)) {
    return "el historial local no está disponible en este navegador.";
  }
  return raw || "error desconocido.";
}

function setStatus(message, isError = false) {
  els.statusMessage.textContent = `${APP_VERSION} · ${message}`;
  els.statusMessage.style.color = isError ? "var(--red)" : "var(--muted)";
}

function formatTime(date) {
  return new Intl.DateTimeFormat("es", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("es", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}
