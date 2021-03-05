// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: mobile;

const defaultConfig = {
    isPortrait: Device.isInPortrait() || Device.isInPortraitUpsideDown(),
    size: Device.screenResolution(),
    symbols: {
        globalIconsSet: 0,
        angle: -5,
        columns: Device.isPad() ? [3, 0, 12, 0, 8, 0, 12, 0, 3] : [3, 0, 12, 0, 8, 0, 12, 0, 3],
        ratios: [2.4, -0.4, 1, -0.1, 3.2, -0.1, 1, -0.4, 2.4],
        scales: [1, 0, 0.5, 0, 0.5, 0, 0.5, 0, 1],
        iconsSets: [0, 0, 3, 0, 3, 0, 3, 0, 0],
        rowsOffsets: [-0.5, 0, 0, 0, 0, 0, 0, 0, -0.5],
    },
    colors: {
        bgAngle: 5,
        bgColors: ["#1d2f6f","#8390fa","#fac748","#f9e9ec","#f88dad"],
        bgRatios: [2, 1, 3, 1, 2],
        fgAngle: 5,
        fgColors: ["#f88dad","#fac748","#1d2f6f","#8390fa","#f9e9ec"],
        fgRatios: [2, 1, 3, 1, 2],
    },
};

const defaultThemes = args.plainTexts.length > 0 
    ? JSON.parse(args.plainTexts[0])
    : {
        default: {
            bgColors: ["#1d2f6f","#8390fa","#fac748","#f9e9ec","#f88dad"],
            bgShuffle: false,
            fgColors: ["#f88dad","#fac748","#1d2f6f","#8390fa","#f9e9ec"],
            fgShuffle: false,
        },
        shifted: {
            colors: ["#1d2f6f","#8390fa","#fac748","#f9e9ec","#f88dad"],
            shuffle: true,
            bgShift: 1,
            fgShift: -1,
        }
    };

const defaultSymbols = ["square.and.arrow.up", "square.and.arrow.up.fill", "square.and.arrow.down", "square.and.arrow.down.fill", "square.and.arrow.up.on.square", "square.and.arrow.up.on.square.fill", "square.and.arrow.down.on.square", "square.and.arrow.down.on.square.fill", "pencil", "pencil.circle", "pencil.circle.fill", "pencil.slash", "square.and.pencil", "rectangle.and.pencil.and.ellipsis", "scribble", "scribble.variable", "highlighter", "pencil.and.outline", "pencil.tip", "pencil.tip.crop.circle", "pencil.tip.crop.circle.badge.arrow.forward", "lasso", "lasso.sparkles", "trash", "trash.fill", "trash.circle", "trash.slash", "trash.slash.fill", "folder", "folder.fill", "folder.circle", "folder.badge.questionmark", "folder.fill.badge.questionmark", "folder.badge.person.crop", "folder.fill.badge.person.crop", "folder.badge.gear", "folder.fill.badge.gear", "plus.rectangle.on.folder", "plus.rectangle.fill.on.folder.fill", "questionmark.folder", "questionmark.folder.fill", "paperplane", "paperplane.fill", "paperplane.circle", "tray", "tray.fill", "tray.circle", "tray.circle.fill", "tray.and.arrow.up", "tray.and.arrow.up.fill", "tray.and.arrow.down", "tray.and.arrow.down.fill", "tray.2", "tray.2.fill", "tray.full", "tray.full.fill", "externaldrive", "externaldrive.fill", "externaldrive.badge.person.crop", "externaldrive.fill.badge.person.crop", "externaldrive.badge.icloud", "externaldrive.fill.badge.icloud", "externaldrive.badge.wifi", "externaldrive.fill.badge.wifi", "externaldrive.badge.timemachine", "externaldrive.fill.badge.timemachine", "internaldrive", "internaldrive.fill", "opticaldiscdrive", "opticaldiscdrive.fill", "externaldrive.connected.to.line.below", "externaldrive.connected.to.line.below.fill", "archivebox", "archivebox.fill", "archivebox.circle", "archivebox.circle.fill", "xmark.bin", "xmark.bin.fill", "xmark.bin.circle", "xmark.bin.circle.fill", "arrow.up.bin", "arrow.up.bin.fill", "doc", "doc.fill", "doc.circle", "doc.circle.fill", "doc.badge.gearshape", "doc.badge.gearshape.fill", "doc.badge.ellipsis", "doc.fill.badge.ellipsis", "lock.doc", "lock.doc.fill", "arrow.up.doc", "arrow.up.doc.fill", "arrow.down.doc", "arrow.down.doc.fill", "doc.text", "doc.text.fill", "doc.zipper", "doc.on.doc", "doc.on.doc.fill", "doc.on.clipboard", "arrow.right.doc.on.clipboard", "arrow.up.doc.on.clipboard", "arrow.triangle.2.circlepath.doc.on.clipboard", "doc.on.clipboard.fill", "doc.richtext", "doc.richtext.fill", "doc.plaintext", "doc.plaintext.fill", "doc.append", "doc.append.fill", "doc.text.below.ecg", "doc.text.below.ecg.fill", "chart.bar.doc.horizontal", "chart.bar.doc.horizontal.fill", "list.bullet.rectangle", "terminal", "terminal.fill", "doc.text.magnifyingglass", "note", "note.text", "calendar", "calendar.circle", "calendar.badge.clock", "calendar.badge.exclamationmark", "arrowshape.turn.up.left", "arrowshape.turn.up.left.fill", "arrowshape.turn.up.left.circle", "arrowshape.turn.up.backward", "arrowshape.turn.up.backward.fill", "arrowshape.turn.up.backward.circle", "arrowshape.turn.up.right", "arrowshape.turn.up.right.fill", "arrowshape.turn.up.right.circle", "arrowshape.turn.up.forward", "arrowshape.turn.up.forward.fill", "arrowshape.turn.up.forward.circle", "arrowshape.turn.up.left.2", "arrowshape.turn.up.left.2.fill", "arrowshape.turn.up.left.2.circle", "arrowshape.turn.up.backward.2", "arrowshape.turn.up.backward.2.fill", "arrowshape.turn.up.backward.2.circle", "arrowshape.zigzag.right", "arrowshape.zigzag.right.fill", "arrowshape.zigzag.forward", "arrowshape.zigzag.forward.fill", "arrowshape.bounce.right", "arrowshape.bounce.right.fill", "arrowshape.bounce.forward", "arrowshape.bounce.forward.fill", "book", "book.fill", "book.circle", "book.circle.fill", "newspaper", "newspaper.fill", "books.vertical", "books.vertical.fill", "book.closed", "book.closed.fill", "character.book.closed", "character.book.closed.fill", "text.book.closed", "text.book.closed.fill", "greetingcard", "greetingcard.fill", "bookmark", "bookmark.circle", "bookmark.slash", "bookmark.slash.fill", "rosette", "graduationcap", "graduationcap.fill", "ticket", "ticket.fill", "paperclip.circle", "paperclip.circle.fill", "paperclip.badge.ellipsis", "rectangle.and.paperclip", "rectangle.dashed.and.paperclip", "link", "link.circle", "personalhotspot", "lineweight", "person", "person.fill", "person.fill.turn.right", "person.fill.turn.down", "person.fill.turn.left", "person.fill.checkmark", "person.fill.xmark", "person.fill.questionmark", "person.circle", "person.circle.fill", "person.and.arrow.left.and.arrow.right", "person.fill.and.arrow.left.and.arrow.right", "person.2", "person.2.fill", "person.2.circle", "person.2.circle.fill", "person.3", "person.3.fill", "person.crop.circle", "person.crop.circle.fill", "person.crop.circle.badge.questionmark", "person.crop.circle.fill.badge.questionmark", "person.crop.square", "person.crop.square.fill", "rectangle.stack.person.crop", "rectangle.stack.person.crop.fill", "person.2.square.stack", "person.2.square.stack.fill", "person.crop.square.fill.and.at.rectangle", "square.and.at.rectangle", "command", "command.circle", "command.circle.fill", "command.square", "command.square.fill", "option", "alt", "delete.right", "delete.right.fill", "clear", "clear.fill", "delete.left", "delete.left.fill", "shift", "shift.fill", "capslock", "capslock.fill", "escape", "restart", "restart.circle", "sleep", "wake", "power", "togglepower", "poweron", "poweroff", "powersleep", "directcurrent", "dot.arrowtriangles.up.right.down.left.circle", "globe", "network", "sun.min", "sun.min.fill", "sun.max", "sunrise", "sunset", "sun.dust", "sun.haze", "moon", "moon.circle", "zzz", "moon.zzz", "moon.zzz.fill", "sparkle", "moon.stars", "cloud", "cloud.drizzle", "cloud.rain", "cloud.heavyrain", "cloud.fog", "cloud.hail", "cloud.snow", "cloud.sleet", "cloud.bolt", "cloud.bolt.rain", "cloud.sun", "cloud.sun.rain", "cloud.sun.bolt", "cloud.moon", "cloud.moon.rain", "cloud.moon.bolt", "smoke", "thermometer.sun", "aqi.low", "aqi.medium", "aqi.high", "umbrella", "umbrella.fill", "flame", "flame.fill", "light.min", "light.max", "rays", "slowmo", "timelapse", "cursorarrow.rays", "cursorarrow", "cursorarrow.square", "cursorarrow.and.square.on.square.dashed", "cursorarrow.click", "cursorarrow.click.2", "contextualmenu.and.cursorarrow", "filemenu.and.cursorarrow", "dot.circle.and.cursorarrow", "cursorarrow.motionlines", "cursorarrow.motionlines.click", "cursorarrow.click.badge.clock", "keyboard", "keyboard.badge.ellipsis", "keyboard.chevron.compact.down", "keyboard.chevron.compact.left", "keyboard.onehanded.left", "keyboard.onehanded.right", "rectangle.3.offgrid", "rectangle.3.offgrid.fill", "square.grid.3x2", "square.grid.3x2.fill", "rectangle.grid.3x2", "rectangle.grid.3x2.fill", "square.grid.2x2", "square.grid.2x2.fill", "rectangle.grid.2x2", "rectangle.grid.2x2.fill", "square.grid.3x1.below.line.grid.1x2", "square.grid.3x1.fill.below.line.grid.1x2", "square.grid.4x3.fill", "rectangle.grid.1x2", "rectangle.grid.1x2.fill", "circle.grid.2x2", "circle.grid.2x2.fill", "circle.grid.3x3", "circle.grid.3x3.fill", "square.grid.3x3", "square.grid.3x3.fill", "square.grid.3x3.topleft.fill", "square.grid.3x3.topmiddle.fill", "square.grid.3x3.topright.fill", "square.grid.3x3.middleleft.fill", "square.grid.3x3.middle.fill", "square.grid.3x3.middleright.fill", "square.grid.3x3.bottomleft.fill", "square.grid.3x3.bottommiddle.fill", "square.grid.3x3.bottomright.fill", "circles.hexagongrid", "circles.hexagongrid.fill", "circles.hexagonpath", "circles.hexagonpath.fill", "circle.grid.cross", "circle.grid.cross.fill", "circle.grid.cross.left.fill", "circle.grid.cross.up.fill", "circle.grid.cross.right.fill", "circle.grid.cross.down.fill", "seal", "seal.fill", "checkmark.seal", "checkmark.seal.fill", "xmark.seal", "xmark.seal.fill", "exclamationmark.triangle", "drop", "drop.fill", "drop.triangle", "play", "play.fill", "play.circle", "play.circle.fill", "play.rectangle", "play.rectangle.fill", "play.slash", "play.slash.fill", "pause", "pause.fill", "pause.circle", "pause.circle.fill", "pause.rectangle", "pause.rectangle.fill", "stop", "stop.fill", "stop.circle", "stop.circle.fill", "record.circle", "record.circle.fill", "playpause", "playpause.fill", "backward", "backward.fill", "forward", "forward.fill", "backward.end", "backward.end.fill", "forward.end", "forward.end.fill", "backward.end.alt", "backward.end.alt.fill", "forward.end.alt", "forward.end.alt.fill", "backward.frame", "backward.frame.fill", "forward.frame", "forward.frame.fill", "eject", "eject.fill", "eject.circle", "eject.circle.fill", "mount", "mount.fill", "memories", "shuffle", "shuffle.circle", "shuffle.circle.fill", "repeat", "repeat.circle", "repeat.circle.fill", "repeat.1", "repeat.1.circle", "repeat.1.circle.fill", "infinity", "infinity.circle", "infinity.circle.fill", "megaphone", "megaphone.fill", "speaker", "speaker.fill", "speaker.slash", "speaker.slash.fill", "speaker.slash.circle", "speaker.slash.circle.fill", "speaker.zzz", "speaker.zzz.fill", "speaker.wave.1", "speaker.wave.1.fill", "speaker.wave.2", "speaker.wave.2.fill", "speaker.wave.2.circle", "speaker.wave.2.circle.fill", "speaker.wave.3", "speaker.wave.3.fill", "music.note", "music.note.list", "music.quarternote.3", "music.mic", "arrow.rectanglepath", "goforward", "gobackward", "goforward.10", "gobackward.10", "goforward.15", "gobackward.15", "goforward.30", "gobackward.30", "goforward.45", "gobackward.45", "goforward.60", "gobackward.60", "goforward.75", "gobackward.75", "goforward.90", "gobackward.90", "goforward.plus", "gobackward.minus", "swift", "magnifyingglass", "magnifyingglass.circle", "magnifyingglass.circle.fill", "plus.magnifyingglass", "minus.magnifyingglass", "1.magnifyingglass", "arrow.up.left.and.down.right.magnifyingglass", "text.magnifyingglass", "loupe", "mic", "mic.fill", "mic.circle", "mic.circle.fill", "mic.slash", "mic.slash.fill", "line.diagonal", "line.diagonal.arrow", "circle", "circle.fill", "circle.lefthalf.fill", "circle.righthalf.fill", "circle.bottomhalf.fill", "circle.tophalf.fill", "largecircle.fill.circle", "smallcircle.fill.circle", "smallcircle.fill.circle.fill", "circle.dashed", "circle.dashed.inset.fill", "circlebadge", "circlebadge.2", "circlebadge.2.fill", "smallcircle.circle", "smallcircle.circle.fill", "target", "capsule", "capsule.fill", "capsule.portrait", "capsule.portrait.fill", "oval", "oval.fill", "oval.portrait", "oval.portrait.fill", "placeholdertext.fill", "square", "square.fill", "square.lefthalf.fill", "square.righthalf.fill", "square.bottomhalf.fill", "square.tophalf.fill", "square.slash", "square.slash.fill", "dot.square", "dot.square.fill", "circle.square", "circle.fill.square.fill", "square.dashed", "square.dashed.inset.fill", "questionmark.square.dashed", "squareshape", "squareshape.fill", "squareshape.dashed.squareshape", "squareshape.squareshape.dashed", "dot.squareshape", "dot.squareshape.fill", "app", "app.fill", "rectangle", "rectangle.fill", "rectangle.slash", "rectangle.slash.fill", "rectangle.portrait", "rectangle.portrait.fill", "triangle", "triangle.fill", "triangle.lefthalf.fill", "triangle.righthalf.fill", "diamond", "diamond.fill", "octagon", "octagon.fill", "hexagon", "hexagon.fill", "suit.heart", "suit.heart.fill", "suit.club", "suit.club.fill", "suit.spade", "suit.spade.fill", "suit.diamond", "suit.diamond.fill", "heart", "heart.fill", "heart.circle", "heart.circle.fill", "heart.slash", "heart.slash.fill", "heart.slash.circle", "heart.slash.circle.fill", "heart.text.square", "heart.text.square.fill", "bolt.heart", "bolt.heart.fill", "arrow.up.heart", "arrow.up.heart.fill", "arrow.down.heart", "arrow.down.heart.fill", "arrow.clockwise.heart", "arrow.clockwise.heart.fill", "rhombus", "rhombus.fill", "star", "star.leadinghalf.fill", "star.circle", "star.square", "star.square.fill", "star.slash", "star.slash.fill", "line.horizontal.star.fill.line.horizontal", "flag", "flag.circle", "flag.slash", "flag.slash.fill", "flag.slash.circle", "flag.slash.circle.fill", "flag.badge.ellipsis", "flag.badge.ellipsis.fill", "location", "location.fill", "location.slash", "location.slash.fill", "location.north", "location.north.fill", "location.circle", "location.north.line", "location.north.line.fill", "bell", "bell.fill", "bell.circle", "bell.slash", "bell.slash.fill", "bell.slash.circle", "bell.slash.circle.fill", "bell.badge", "bell.badge.fill", "tag", "tag.fill", "tag.circle", "tag.circle.fill", "tag.slash", "tag.slash.fill", "bolt", "bolt.fill", "bolt.circle", "bolt.circle.fill", "bolt.slash", "bolt.slash.fill", "bolt.slash.circle", "bolt.slash.circle.fill", "bolt.badge.a", "bolt.badge.a.fill", "bolt.horizontal", "bolt.horizontal.fill", "bolt.horizontal.circle", "bolt.horizontal.circle.fill", "eye", "eye.fill", "eye.circle", "eye.circle.fill", "eye.slash", "eye.slash.fill", "eyes", "eyes.inverse", "eyebrow", "nose", "nose.fill", "mustache", "mustache.fill", "mouth", "mouth.fill", "icloud", "icloud.fill", "icloud.circle", "icloud.circle.fill", "icloud.slash", "icloud.slash.fill", "exclamationmark.icloud", "exclamationmark.icloud.fill", "checkmark.icloud", "checkmark.icloud.fill", "xmark.icloud", "xmark.icloud.fill", "link.icloud", "link.icloud.fill", "bolt.horizontal.icloud", "bolt.horizontal.icloud.fill", "person.icloud", "person.icloud.fill", "lock.icloud", "lock.icloud.fill", "key.icloud", "key.icloud.fill", "arrow.clockwise.icloud", "arrow.clockwise.icloud.fill", "arrow.counterclockwise.icloud", "arrow.counterclockwise.icloud.fill", "icloud.and.arrow.down", "icloud.and.arrow.down.fill", "icloud.and.arrow.up", "icloud.and.arrow.up.fill", "flashlight.off.fill", "flashlight.on.fill", "camera", "camera.fill", "camera.circle", "camera.circle.fill", "camera.badge.ellipsis", "camera.fill.badge.ellipsis", "arrow.triangle.2.circlepath.camera", "arrow.triangle.2.circlepath.camera.fill", "camera.on.rectangle", "camera.on.rectangle.fill", "message", "message.fill", "message.circle", "arrow.up.message", "arrow.up.message.fill", "plus.message", "plus.message.fill", "bubble.right", "bubble.right.fill", "bubble.left", "bubble.left.fill", "exclamationmark.bubble", "exclamationmark.bubble.fill", "quote.bubble", "quote.bubble.fill", "t.bubble", "t.bubble.fill", "text.bubble", "text.bubble.fill", "captions.bubble", "captions.bubble.fill", "plus.bubble", "plus.bubble.fill", "rectangle.3.offgrid.bubble.left", "rectangle.3.offgrid.bubble.left.fill", "ellipsis.bubble", "ellipsis.bubble.fill", "phone.bubble.left", "phone.bubble.left.fill", "video.bubble.left", "video.bubble.left.fill", "bubble.middle.bottom", "bubble.middle.bottom.fill", "bubble.middle.top", "bubble.middle.top.fill", "bubble.left.and.bubble.right", "bubble.left.and.bubble.right.fill", "phone", "phone.fill", "phone.circle", "phone.connection", "phone.fill.connection", "phone.arrow.up.right", "phone.fill.arrow.up.right", "phone.arrow.down.left", "phone.fill.arrow.down.left", "phone.arrow.right", "phone.fill.arrow.right", "phone.down", "phone.down.fill", "phone.down.circle", "teletype", "teletype.circle", "teletype.answer", "video", "video.fill", "video.circle", "video.slash", "video.slash.fill", "arrow.up.right.video", "arrow.up.right.video.fill", "arrow.down.left.video", "arrow.down.left.video.fill", "questionmark.video", "questionmark.video.fill", "envelope", "envelope.fill", "envelope.circle", "envelope.arrow.triangle.branch", "envelope.arrow.triangle.branch.fill", "envelope.open", "envelope.open.fill", "envelope.badge", "envelope.badge.fill", "envelope.badge.shield.leadinghalf.fill", "envelope.fill.badge.shield.trailinghalf.fill", "mail.stack", "mail.stack.fill", "mail", "mail.fill", "mail.and.text.magnifyingglass", "rectangle.and.text.magnifyingglass", "arrow.up.right.and.arrow.down.left.rectangle", "arrow.up.right.and.arrow.down.left.rectangle.fill", "gear", "gearshape", "gearshape.fill", "gearshape.2", "gearshape.2.fill", "signature", "line.3.crossed.swirl.circle", "line.3.crossed.swirl.circle.fill", "scissors", "scissors.badge.ellipsis", "ellipsis", "ellipsis.circle", "ellipsis.circle.fill", "ellipsis.rectangle", "ellipsis.rectangle.fill", "bag", "bag.fill", "bag.circle", "bag.circle.fill", "cart", "cart.fill", "cart.circle", "cart.circle.fill", "creditcard", "creditcard.fill", "creditcard.circle", "creditcard.circle.fill", "giftcard", "giftcard.fill", "wallet.pass", "wallet.pass.fill", "wand.and.rays", "wand.and.rays.inverse", "wand.and.stars", "wand.and.stars.inverse", "crop", "crop.rotate", "dial.min", "dial.min.fill", "dial.max", "dial.max.fill", "gyroscope", "nosign", "gauge", "speedometer", "barometer", "metronome", "metronome.fill", "amplifier", "die.face.1", "die.face.1.fill", "die.face.2", "die.face.2.fill", "die.face.3", "die.face.3.fill", "die.face.4", "die.face.4.fill", "die.face.5", "die.face.5.fill", "die.face.6", "die.face.6.fill", "square.grid.3x3.fill.square", "pianokeys", "pianokeys.inverse", "tuningfork", "paintbrush", "paintbrush.fill", "paintbrush.pointed", "paintbrush.pointed.fill", "bandage", "bandage.fill", "ruler", "ruler.fill", "level", "level.fill", "wrench", "wrench.fill", "hammer", "hammer.fill", "eyedropper", "eyedropper.halffull", "eyedropper.full", "wrench.and.screwdriver", "wrench.and.screwdriver.fill", "applescript", "applescript.fill", "scroll", "scroll.fill", "stethoscope", "printer", "printer.fill", "printer.fill.and.paper.fill", "printer.dotmatrix", "printer.dotmatrix.fill", "printer.dotmatrix.fill.and.paper.fill", "scanner", "scanner.fill", "faxmachine", "briefcase", "briefcase.fill", "case", "case.fill", "latch.2.case", "latch.2.case.fill", "cross.case", "cross.case.fill", "puzzlepiece", "puzzlepiece.fill", "homekit", "house", "house.fill", "house.circle", "house.circle.fill", "music.note.house", "music.note.house.fill", "building.columns", "building.columns.fill", "square.split.bottomrightquarter", "square.split.bottomrightquarter.fill", "building", "building.fill", "building.2", "building.2.fill", "building.2.crop.circle", "building.2.crop.circle.fill", "lock", "lock.fill", "lock.circle", "lock.circle.fill", "lock.square", "lock.square.fill", "lock.square.stack", "lock.square.stack.fill", "lock.rectangle", "lock.rectangle.fill", "lock.rectangle.stack", "lock.rectangle.stack.fill", "lock.rectangle.on.rectangle", "lock.rectangle.on.rectangle.fill", "lock.shield", "lock.shield.fill", "lock.slash", "lock.slash.fill", "lock.open", "lock.open.fill", "lock.rotation", "lock.rotation.open", "key", "key.fill", "wifi.slash", "wifi.exclamationmark", "pin", "pin.fill", "pin.circle", "pin.slash", "pin.slash.fill", "mappin", "mappin.circle", "mappin.slash", "mappin.and.ellipse", "map", "map.fill", "safari", "safari.fill", "move.3d", "scale.3d", "rotate.3d", "torus", "rotate.left", "rotate.left.fill", "rotate.right", "rotate.right.fill", "selection.pin.in.out", "timeline.selection", "cpu", "memorychip", "opticaldisc", "tv", "tv.fill", "tv.circle", "tv.circle.fill", "4k.tv", "4k.tv.fill", "tv.music.note", "tv.music.note.fill", "play.tv", "play.tv.fill", "photo.tv", "tv.and.hifispeaker.fill", "tv.and.mediabox", "display", "display.trianglebadge.exclamationmark", "display.2", "desktopcomputer", "pc", "macpro.gen1", "macpro.gen2", "macpro.gen2.fill", "macpro.gen3", "server.rack", "xserve", "macpro.gen3.server", "laptopcomputer", "laptopcomputer.and.iphone", "macmini", "macmini.fill", "airport.express", "airport.extreme.tower", "airport.extreme", "ipod", "flipphone", "candybarphone", "iphone.homebutton", "iphone.homebutton.landscape", "iphone.homebutton.radiowaves.left.and.right", "iphone.homebutton.slash", "iphone", "iphone.landscape", "iphone.radiowaves.left.and.right", "iphone.slash", "iphone.homebutton.badge.play", "iphone.badge.play", "ipad.homebutton.badge.play", "ipad.badge.play", "ipad.homebutton.landscape.badge.play", "ipad.landscape.badge.play", "arrow.turn.up.forward.iphone", "arrow.turn.up.forward.iphone.fill", "apps.iphone", "apps.iphone.badge.plus", "apps.iphone.landscape", "ipodtouch", "ipodtouch.landscape", "ipodshuffle.gen1", "ipodshuffle.gen2", "ipodshuffle.gen3", "ipodshuffle.gen4", "ipad.homebutton", "ipad", "apps.ipad", "ipad.homebutton.landscape", "ipad.landscape", "apps.ipad.landscape", "applewatch", "applewatch.watchface", "exclamationmark.applewatch", "lock.applewatch", "applewatch.radiowaves.left.and.right", "applewatch.slash", "earpods", "airpods", "airpod.right", "airpod.left", "airpodspro", "airpodpro.right", "airpodpro.left", "homepod", "homepod.fill", "homepod.2", "homepod.2.fill", "hifispeaker.and.homepod", "hifispeaker.and.homepod.fill", "hifispeaker", "hifispeaker.fill", "hifispeaker.2", "hifispeaker.2.fill", "radio", "radio.fill", "appletv", "appletv.fill", "signpost.left", "signpost.left.fill", "signpost.right", "signpost.right.fill", "airplayvideo", "airplayaudio", "dot.radiowaves.left.and.right", "dot.radiowaves.right", "dot.radiowaves.forward", "wave.3.left", "wave.3.left.circle", "wave.3.left.circle.fill", "wave.3.backward", "wave.3.backward.circle", "wave.3.backward.circle.fill", "wave.3.right", "wave.3.right.circle", "wave.3.right.circle.fill", "wave.3.forward", "wave.3.forward.circle", "wave.3.forward.circle.fill", "antenna.radiowaves.left.and.right", "pip", "pip.fill", "pip.exit", "pip.enter", "pip.swap", "pip.remove", "rectangle.arrowtriangle.2.outward", "rectangle.arrowtriangle.2.inward", "rectangle.portrait.arrowtriangle.2.outward", "rectangle.portrait.arrowtriangle.2.inward", "guitars", "guitars.fill", "car", "car.fill", "car.circle", "bolt.car", "bolt.car.fill", "car.2", "car.2.fill", "bus", "bus.fill", "bus.doubledecker", "bus.doubledecker.fill", "tram", "tram.fill", "tram.circle", "tram.circle.fill", "tram.tunnel.fill", "bicycle", "bicycle.circle", "bicycle.circle.fill", "bed.double", "bed.double.fill", "lungs", "lungs.fill", "pills", "pills.fill", "cross", "cross.fill", "cross.circle", "hare", "hare.fill", "tortoise", "tortoise.fill", "ant", "ant.fill", "ant.circle", "ant.circle.fill", "ladybug", "ladybug.fill", "leaf", "leaf.arrow.triangle.circlepath", "film", "film.fill", "sportscourt", "sportscourt.fill", "face.smiling", "face.smiling.fill", "face.dashed", "face.dashed.fill", "crown", "crown.fill", "comb", "comb.fill", "qrcode", "barcode", "viewfinder", "viewfinder.circle", "viewfinder.circle.fill", "barcode.viewfinder", "qrcode.viewfinder", "plus.viewfinder", "camera.viewfinder", "faceid", "doc.text.viewfinder", "doc.text.fill.viewfinder", "location.viewfinder", "location.fill.viewfinder", "person.fill.viewfinder", "rectangle.inset.fill", "rectangle.lefthalf.inset.fill", "rectangle.righthalf.inset.fill", "rectangle.topthird.inset", "rectangle.bottomthird.inset.fill", "rectangle.leftthird.inset.fill", "rectangle.rightthird.inset.fill", "rectangle.center.inset.fill", "rectangle.inset.topleft.fill", "rectangle.inset.topright.fill", "rectangle.inset.bottomleft.fill", "rectangle.inset.bottomright.fill", "rectangle.lefthalf.inset.fill.arrow.left", "rectangle.righthalf.inset.fill.arrow.right", "rectangle.lefthalf.fill", "rectangle.righthalf.fill", "person.crop.rectangle", "person.crop.rectangle.fill", "arrow.up.and.person.rectangle.portrait", "arrow.up.and.person.rectangle.turn.right", "arrow.up.and.person.rectangle.turn.left", "photo", "photo.fill", "text.below.photo", "text.below.photo.fill", "checkerboard.rectangle", "camera.metering.center.weighted.average", "camera.metering.center.weighted", "camera.metering.matrix", "camera.metering.multispot", "camera.metering.none", "camera.metering.partial", "camera.metering.spot", "camera.metering.unknown", "camera.aperture", "rectangle.dashed", "rectangle.dashed.badge.record", "rectangle.badge.person.crop", "rectangle.fill.badge.person.crop", "sidebar.left", "sidebar.right", "sidebar.leading", "sidebar.trailing", "sidebar.squares.left", "sidebar.squares.right", "sidebar.squares.leading", "sidebar.squares.trailing", "macwindow", "dock.rectangle", "dock.arrow.up.rectangle", "dock.arrow.down.rectangle", "menubar.rectangle", "menubar.dock.rectangle", "menubar.dock.rectangle.badge.record", "menubar.arrow.up.rectangle", "menubar.arrow.down.rectangle", "macwindow.on.rectangle", "text.and.command.macwindow", "keyboard.macwindow", "uiwindow.split.2x1", "rectangle.split.3x1", "rectangle.split.3x1.fill", "square.split.2x1", "square.split.2x1.fill", "square.split.1x2", "square.split.1x2.fill", "square.split.2x2", "square.split.2x2.fill", "square.split.diagonal.2x2", "square.split.diagonal.2x2.fill", "square.split.diagonal", "square.split.diagonal.fill", "mosaic", "mosaic.fill", "squares.below.rectangle", "rectangle.split.3x3", "rectangle.split.3x3.fill", "rectangle.split.2x1", "rectangle.split.2x1.fill", "rectangle.split.1x2", "rectangle.split.1x2.fill", "rectangle.split.2x2", "rectangle.split.2x2.fill", "tablecells", "tablecells.fill", "tablecells.badge.ellipsis", "tablecells.badge.ellipsis.fill", "rectangle.on.rectangle", "rectangle.fill.on.rectangle.fill", "rectangle.fill.on.rectangle.fill.circle", "rectangle.fill.on.rectangle.fill.circle.fill", "rectangle.on.rectangle.slash", "rectangle.fill.on.rectangle.fill.slash.fill", "plus.rectangle.on.rectangle", "plus.rectangle.fill.on.rectangle.fill", "photo.on.rectangle", "photo.fill.on.rectangle.fill", "rectangle.on.rectangle.angled", "rectangle.fill.on.rectangle.angled.fill", "photo.on.rectangle.angled", "rectangle.stack", "rectangle.stack.fill", "rectangle.stack.badge.person.crop", "rectangle.stack.fill.badge.person.crop", "sparkles.rectangle.stack", "sparkles.rectangle.stack.fill", "r.square.on.square", "r.square.fill.on.square.fill", "j.square.on.square", "j.square.fill.on.square.fill", "h.square.on.square", "h.square.fill.on.square.fill", "square.on.square", "square.fill.on.square.fill", "square.fill.on.square", "sparkles.square.fill.on.square", "square.on.square.dashed", "plus.square.on.square", "plus.square.fill.on.square.fill", "square.on.circle", "square.fill.on.circle.fill", "square.on.square.squareshape.controlhandles", "squareshape.controlhandles.on.squareshape.controlhandles", "square.stack", "square.stack.fill", "pano", "pano.fill", "square.and.line.vertical.and.square", "square.fill.and.line.vertical.square.fill", "square.fill.and.line.vertical.and.square", "square.and.line.vertical.and.square.fill", "flowchart", "flowchart.fill", "rectangle.connected.to.line.below", "shield", "shield.slash", "shield.fill", "shield.slash.fill", "shield.lefthalf.fill", "shield.lefthalf.fill.slash", "shield.checkerboard", "switch.2", "point.topleft.down.curvedto.point.bottomright.up", "point.fill.topleft.down.curvedto.point.fill.bottomright.up", "slider.horizontal.3", "slider.horizontal.below.rectangle", "slider.horizontal.below.square.fill.and.square", "slider.vertical.3", "cube", "cube.fill", "cube.transparent", "cube.transparent.fill", "shippingbox", "shippingbox.fill", "arkit", "cone", "cone.fill", "pyramid", "pyramid.fill", "square.stack.3d.down.right", "square.stack.3d.down.right.fill", "square.stack.3d.down.forward", "square.stack.3d.down.forward.fill", "square.stack.3d.up", "square.stack.3d.up.fill", "square.stack.3d.up.slash", "square.stack.3d.up.slash.fill", "square.stack.3d.up.badge.a", "square.stack.3d.up.badge.a.fill", "square.stack.3d.forward.dottedline", "square.stack.3d.forward.dottedline.fill", "livephoto", "livephoto.slash", "livephoto.badge.a", "livephoto.play", "scope", "helm", "clock", "clock.fill", "deskclock", "deskclock.fill", "alarm.fill", "stopwatch", "stopwatch.fill", "timer.square", "clock.arrow.circlepath", "exclamationmark.arrow.circlepath", "clock.arrow.2.circlepath", "gamecontroller", "gamecontroller.fill", "l.joystick", "l.joystick.fill", "r.joystick", "r.joystick.fill", "l.joystick.down", "l.joystick.down.fill", "r.joystick.down", "r.joystick.down.fill", "dpad", "dpad.fill", "dpad.left.fill", "dpad.up.fill", "dpad.right.fill", "dpad.down.fill", "circle.circle", "circle.circle.fill", "square.circle", "square.circle.fill", "triangle.circle", "triangle.circle.fill", "rectangle.roundedtop", "rectangle.roundedtop.fill", "rectangle.roundedbottom", "rectangle.roundedbottom.fill", "l.rectangle.roundedbottom", "l.rectangle.roundedbottom.fill", "l1.rectangle.roundedbottom", "l1.rectangle.roundedbottom.fill", "l2.rectangle.roundedtop", "l2.rectangle.roundedtop.fill", "r.rectangle.roundedbottom", "r.rectangle.roundedbottom.fill", "r1.rectangle.roundedbottom", "r1.rectangle.roundedbottom.fill", "r2.rectangle.roundedtop", "r2.rectangle.roundedtop.fill", "lb.rectangle.roundedbottom", "lb.rectangle.roundedbottom.fill", "rb.rectangle.roundedbottom", "rb.rectangle.roundedbottom.fill", "lt.rectangle.roundedtop", "lt.rectangle.roundedtop.fill", "rt.rectangle.roundedtop", "rt.rectangle.roundedtop.fill", "zl.rectangle.roundedtop", "zl.rectangle.roundedtop.fill", "zr.rectangle.roundedtop", "zr.rectangle.roundedtop.fill", "paintpalette", "paintpalette.fill", "figure.walk", "figure.walk.circle", "figure.walk.circle.fill", "figure.walk.diamond", "figure.walk.diamond.fill", "figure.stand", "figure.stand.line.dotted.figure.stand", "figure.wave", "figure.wave.circle", "figure.wave.circle.fill", "ear", "ear.trianglebadge.exclamationmark", "ear.fill", "hearingaid.ear", "hand.raised", "hand.raised.fill", "hand.raised.slash", "hand.raised.slash.fill", "hand.thumbsup", "hand.thumbsup.fill", "hand.thumbsdown", "hand.thumbsdown.fill", "hand.point.up.left", "hand.point.up.left.fill", "hand.draw", "hand.draw.fill", "hand.tap", "hand.tap.fill", "hand.point.left", "hand.point.left.fill", "hand.point.right", "hand.point.right.fill", "hand.point.up", "hand.point.up.fill", "hand.point.up.braille", "hand.point.up.braille.fill", "hand.point.down", "hand.point.down.fill", "hand.wave", "hand.wave.fill", "hands.clap", "hands.clap.fill", "hands.sparkles", "hands.sparkles.fill", "rectangle.compress.vertical", "rectangle.expand.vertical", "rectangle.and.arrow.up.right.and.arrow.down.left", "rectangle.and.arrow.up.right.and.arrow.down.left.slash", "square.2.stack.3d", "square.2.stack.3d.top.fill", "square.2.stack.3d.bottom.fill", "square.3.stack.3d", "square.3.stack.3d.top.fill", "square.3.stack.3d.middle.fill", "square.3.stack.3d.bottom.fill", "cylinder", "cylinder.fill", "cylinder.split.1x2", "cylinder.split.1x2.fill", "chart.bar", "chart.bar.fill", "chart.pie", "chart.pie.fill", "chart.bar.xaxis", "dot.squareshape.split.2x2", "squareshape.split.2x2.dotted", "squareshape.split.2x2", "squareshape.split.3x3", "burst", "burst.fill", "waveform.path.ecg", "waveform.path.ecg.rectangle", "waveform.path.ecg.rectangle.fill", "waveform.path", "waveform", "waveform.circle", "waveform.circle.fill", "staroflife", "staroflife.fill", "staroflife.circle", "staroflife.circle.fill", "simcard", "simcard.fill", "simcard.2", "simcard.2.fill", "esim", "esim.fill", "sdcard", "sdcard.fill", "touchid", "bonjour", "atom", "scalemass", "scalemass.fill", "headphones", "headphones.circle", "headphones.circle.fill", "gift.circle", "plus.app", "plus.app.fill", "arrow.down.app", "arrow.down.app.fill", "arrow.up.forward.app", "arrow.up.forward.app.fill", "app.badge", "app.badge.fill", "appclip", "app.gift", "app.gift.fill", "airplane", "airplane.circle", "studentdesk", "hourglass", "hourglass.bottomhalf.fill", "hourglass.tophalf.fill", "banknote", "banknote.fill", "paragraphsign", "purchased", "purchased.circle", "purchased.circle.fill", "perspective", "aspectratio", "aspectratio.fill", "camera.filters", "skew", "arrow.left.and.right.righttriangle.left.righttriangle.right", "arrow.left.and.right.righttriangle.left.righttriangle.right.fill", "arrow.up.and.down.righttriangle.up.righttriangle.down", "arrow.up.and.down.righttriangle.up.fill.righttriangle.down.fill", "arrowtriangle.left.and.line.vertical.and.arrowtriangle.right", "arrowtriangle.left.fill.and.line.vertical.and.arrowtriangle.right.fill", "arrowtriangle.right.and.line.vertical.and.arrowtriangle.left", "arrowtriangle.right.fill.and.line.vertical.and.arrowtriangle.left.fill", "grid", "grid.circle", "grid.circle.fill", "burn", "lifepreserver", "lifepreserver.fill", "recordingtape", "eyeglasses", "binoculars", "binoculars.fill", "battery.100", "battery.25", "battery.0", "battery.100.bolt", "minus.plus.batteryblock", "minus.plus.batteryblock.fill", "bolt.fill.batteryblock", "bolt.fill.batteryblock.fill", "lightbulb", "lightbulb.fill", "lightbulb.slash", "lightbulb.slash.fill", "fiberchannel", "square.fill.text.grid.1x2", "list.dash", "list.bullet", "list.triangle", "list.bullet.indent", "list.number", "list.star", "increase.indent", "decrease.indent", "decrease.quotelevel", "increase.quotelevel", "list.bullet.below.rectangle", "text.badge.star", "text.insert", "text.append", "text.quote", "text.alignleft", "text.aligncenter", "text.alignright", "text.justify", "text.justifyleft", "text.justifyright", "text.redaction", "list.and.film", "line.horizontal.3", "line.horizontal.3.decrease", "line.horizontal.3.decrease.circle", "line.horizontal.3.decrease.circle.fill", "line.horizontal.3.circle", "line.horizontal.3.circle.fill", "line.horizontal.2.decrease.circle", "line.horizontal.2.decrease.circle.fill", "character", "textformat.size.smaller", "textformat.size.larger", "abc", "textformat.alt", "textformat", "textformat.size", "textformat.superscript", "textformat.subscript", "bold", "italic", "underline", "strikethrough", "shadow", "bold.italic.underline", "bold.underline", "view.2d", "view.3d", "text.cursor", "fx", "f.cursive", "f.cursive.circle", "f.cursive.circle.fill", "k", "sum", "percent", "function", "textformat.abc", "textformat.abc.dottedunderline", "fn", "textformat.123", "textbox", "a.magnify", "info", "info.circle", "at", "at.circle", "questionmark", "questionmark.circle", "questionmark.circle.fill", "questionmark.square", "questionmark.square.fill", "questionmark.diamond", "questionmark.diamond.fill", "exclamationmark", "exclamationmark.2", "exclamationmark.3", "exclamationmark.circle", "exclamationmark.circle.fill", "exclamationmark.square", "exclamationmark.square.fill", "exclamationmark.octagon", "exclamationmark.octagon.fill", "exclamationmark.shield", "exclamationmark.shield.fill", "plus", "plus.circle", "plus.square", "plus.square.fill", "plus.rectangle", "plus.rectangle.fill", "plus.rectangle.portrait", "plus.rectangle.portrait.fill", "plus.diamond", "plus.diamond.fill", "minus", "minus.circle", "minus.square", "minus.square.fill", "minus.rectangle", "minus.rectangle.fill", "minus.rectangle.portrait", "minus.rectangle.portrait.fill", "minus.diamond", "minus.diamond.fill", "plusminus", "plusminus.circle", "plusminus.circle.fill", "plus.slash.minus", "minus.slash.plus", "multiply", "multiply.circle", "multiply.circle.fill", "multiply.square", "multiply.square.fill", "xmark.rectangle", "xmark.rectangle.fill", "xmark.rectangle.portrait", "xmark.rectangle.portrait.fill", "xmark.diamond", "xmark.diamond.fill", "xmark.shield", "xmark.shield.fill", "xmark.octagon", "divide", "divide.circle", "divide.circle.fill", "divide.square", "divide.square.fill", "equal", "equal.circle", "equal.circle.fill", "equal.square", "equal.square.fill", "lessthan", "lessthan.circle", "lessthan.circle.fill", "lessthan.square", "lessthan.square.fill", "greaterthan", "greaterthan.circle", "greaterthan.circle.fill", "greaterthan.square", "greaterthan.square.fill", "chevron.left.slash.chevron.right", "curlybraces", "curlybraces.square", "curlybraces.square.fill", "number", "number.circle", "number.circle.fill", "number.square", "number.square.fill", "x.squareroot", "xmark", "xmark.circle", "xmark.circle.fill", "xmark.square", "xmark.square.fill", "checkmark", "checkmark.circle", "checkmark.square", "checkmark.square.fill", "checkmark.rectangle", "checkmark.rectangle.fill", "checkmark.rectangle.portrait", "checkmark.rectangle.portrait.fill", "checkmark.shield", "checkmark.shield.fill", "chevron.left", "chevron.left.circle", "chevron.left.circle.fill", "chevron.left.square", "chevron.left.square.fill", "chevron.backward", "chevron.backward.circle", "chevron.backward.circle.fill", "chevron.backward.square", "chevron.backward.square.fill", "chevron.right", "chevron.right.circle", "chevron.right.circle.fill", "chevron.right.square", "chevron.right.square.fill", "chevron.forward", "chevron.forward.circle", "chevron.forward.circle.fill", "chevron.forward.square", "chevron.forward.square.fill", "chevron.left.2", "chevron.backward.2", "chevron.right.2", "chevron.forward.2", "chevron.up", "chevron.up.circle", "chevron.up.circle.fill", "chevron.up.square", "chevron.up.square.fill", "chevron.down", "chevron.down.circle", "chevron.down.circle.fill", "chevron.down.square", "chevron.down.square.fill", "control", "projective", "chevron.up.chevron.down", "chevron.compact.up", "chevron.compact.down", "chevron.compact.left", "chevron.compact.right", "arrow.left", "arrow.left.circle", "arrow.left.circle.fill", "arrow.left.square", "arrow.left.square.fill", "arrow.backward", "arrow.backward.circle", "arrow.backward.circle.fill", "arrow.backward.square", "arrow.backward.square.fill", "arrow.right", "arrow.right.circle", "arrow.right.circle.fill", "arrow.right.square", "arrow.right.square.fill", "arrow.forward", "arrow.forward.circle", "arrow.forward.circle.fill", "arrow.forward.square", "arrow.forward.square.fill", "arrow.up", "arrow.up.circle", "arrow.up.circle.fill", "arrow.up.square", "arrow.up.square.fill", "arrow.down", "arrow.down.circle", "arrow.down.circle.fill", "arrow.down.square", "arrow.down.square.fill", "arrow.up.left", "arrow.up.left.circle", "arrow.up.left.circle.fill", "arrow.up.left.square", "arrow.up.left.square.fill", "arrow.up.backward", "arrow.up.backward.circle", "arrow.up.backward.circle.fill", "arrow.up.backward.square", "arrow.up.backward.square.fill", "arrow.up.right", "arrow.up.right.circle", "arrow.up.right.circle.fill", "arrow.up.right.square", "arrow.up.right.square.fill", "arrow.up.forward", "arrow.up.forward.circle", "arrow.up.forward.circle.fill", "arrow.up.forward.square", "arrow.up.forward.square.fill", "arrow.down.left", "arrow.down.left.circle", "arrow.down.left.circle.fill", "arrow.down.left.square", "arrow.down.left.square.fill", "arrow.down.backward", "arrow.down.backward.circle", "arrow.down.backward.circle.fill", "arrow.down.backward.square", "arrow.down.backward.square.fill", "arrow.down.right", "arrow.down.right.circle", "arrow.down.right.circle.fill", "arrow.down.right.square", "arrow.down.right.square.fill", "arrow.down.forward", "arrow.down.forward.circle", "arrow.down.forward.circle.fill", "arrow.down.forward.square", "arrow.down.forward.square.fill", "arrow.left.arrow.right", "arrow.left.arrow.right.circle", "arrow.left.arrow.right.circle.fill", "arrow.left.arrow.right.square", "arrow.left.arrow.right.square.fill", "arrow.up.arrow.down", "arrow.up.arrow.down.circle", "arrow.up.arrow.down.circle.fill", "arrow.up.arrow.down.square", "arrow.up.arrow.down.square.fill", "arrow.turn.down.left", "arrow.turn.up.left", "arrow.turn.down.right", "arrow.turn.up.right", "arrow.turn.right.up", "arrow.turn.left.up", "arrow.turn.right.down", "arrow.turn.left.down", "arrow.uturn.left", "arrow.uturn.left.circle", "arrow.uturn.left.circle.fill", "arrow.uturn.left.circle.badge.ellipsis", "arrow.uturn.left.square", "arrow.uturn.left.square.fill", "arrow.uturn.backward", "arrow.uturn.backward.circle", "arrow.uturn.backward.circle.fill", "arrow.uturn.backward.circle.badge.ellipsis", "arrow.uturn.backward.square", "arrow.uturn.backward.square.fill", "arrow.uturn.right", "arrow.uturn.right.circle", "arrow.uturn.right.circle.fill", "arrow.uturn.right.square", "arrow.uturn.right.square.fill", "arrow.uturn.forward", "arrow.uturn.forward.circle", "arrow.uturn.forward.circle.fill", "arrow.uturn.forward.square", "arrow.uturn.forward.square.fill", "arrow.uturn.up", "arrow.uturn.up.circle", "arrow.uturn.up.circle.fill", "arrow.uturn.up.square", "arrow.uturn.up.square.fill", "arrow.uturn.down", "arrow.uturn.down.circle", "arrow.uturn.down.circle.fill", "arrow.uturn.down.square", "arrow.uturn.down.square.fill", "arrow.up.and.down.and.arrow.left.and.right", "arrow.up.left.and.down.right.and.arrow.up.right.and.down.left", "arrow.left.and.right", "arrow.left.and.right.circle", "arrow.left.and.right.circle.fill", "arrow.left.and.right.square", "arrow.left.and.right.square.fill", "arrow.up.and.down", "arrow.up.and.down.circle", "arrow.up.and.down.circle.fill", "arrow.up.and.down.square", "arrow.up.and.down.square.fill", "arrow.left.to.line.alt", "arrow.left.to.line", "arrow.right.to.line.alt", "arrow.right.to.line", "arrow.up.to.line.alt", "arrow.up.to.line", "arrow.down.to.line.alt", "arrow.down.to.line", "arrow.clockwise", "arrow.clockwise.circle", "arrow.clockwise.circle.fill", "arrow.counterclockwise", "arrow.counterclockwise.circle", "arrow.counterclockwise.circle.fill", "arrow.up.left.and.arrow.down.right", "arrow.up.left.and.arrow.down.right.circle", "arrow.up.left.and.arrow.down.right.circle.fill", "arrow.up.backward.and.arrow.down.forward", "arrow.up.backward.and.arrow.down.forward.circle", "arrow.up.backward.and.arrow.down.forward.circle.fill", "arrow.down.right.and.arrow.up.left", "arrow.down.right.and.arrow.up.left.circle", "arrow.down.right.and.arrow.up.left.circle.fill", "arrow.down.forward.and.arrow.up.backward", "arrow.down.forward.and.arrow.up.backward.circle", "arrow.down.forward.and.arrow.up.backward.circle.fill", "return", "arrow.2.squarepath", "arrow.triangle.2.circlepath", "arrow.triangle.2.circlepath.circle", "arrow.triangle.2.circlepath.circle.fill", "exclamationmark.arrow.triangle.2.circlepath", "arrow.triangle.capsulepath", "arrow.3.trianglepath", "arrow.triangle.turn.up.right.diamond", "arrow.triangle.turn.up.right.diamond.fill", "arrow.triangle.turn.up.right.circle", "arrow.triangle.turn.up.right.circle.fill", "arrow.triangle.merge", "arrow.triangle.swap", "arrow.triangle.branch", "arrow.triangle.pull", "arrowtriangle.left", "arrowtriangle.left.fill", "arrowtriangle.left.circle", "arrowtriangle.left.circle.fill", "arrowtriangle.left.square", "arrowtriangle.left.square.fill", "arrowtriangle.backward", "arrowtriangle.backward.fill", "arrowtriangle.backward.circle", "arrowtriangle.backward.circle.fill", "arrowtriangle.backward.square", "arrowtriangle.backward.square.fill", "arrowtriangle.right", "arrowtriangle.right.fill", "arrowtriangle.right.circle", "arrowtriangle.right.circle.fill", "arrowtriangle.right.square", "arrowtriangle.right.square.fill", "arrowtriangle.forward", "arrowtriangle.forward.fill", "arrowtriangle.forward.circle", "arrowtriangle.forward.circle.fill", "arrowtriangle.forward.square", "arrowtriangle.forward.square.fill", "arrowtriangle.up", "arrowtriangle.up.fill", "arrowtriangle.up.circle", "arrowtriangle.up.circle.fill", "arrowtriangle.up.square", "arrowtriangle.up.square.fill", "arrowtriangle.down", "arrowtriangle.down.fill", "arrowtriangle.down.circle", "arrowtriangle.down.circle.fill", "arrowtriangle.down.square", "arrowtriangle.down.square.fill", "slash.circle", "slash.circle.fill", "asterisk.circle", "asterisk.circle.fill", "a.circle", "a.circle.fill", "a.square", "a.square.fill", "b.circle", "b.circle.fill", "b.square", "b.square.fill", "c.circle", "c.circle.fill", "c.square", "c.square.fill", "d.circle", "d.circle.fill", "d.square", "d.square.fill", "e.circle", "e.circle.fill", "e.square", "e.square.fill", "f.circle", "f.circle.fill", "f.square", "f.square.fill", "g.circle", "g.circle.fill", "g.square", "g.square.fill", "h.circle", "h.circle.fill", "h.square", "h.square.fill", "i.circle", "i.circle.fill", "i.square", "i.square.fill", "j.circle", "j.circle.fill", "j.square", "j.square.fill", "k.circle", "k.circle.fill", "k.square", "k.square.fill", "l.circle", "l.circle.fill", "l.square", "l.square.fill", "m.circle", "m.circle.fill", "m.square", "m.square.fill", "n.circle", "n.circle.fill", "n.square", "n.square.fill", "o.circle", "o.circle.fill", "o.square", "o.square.fill", "p.circle", "p.circle.fill", "p.square", "p.square.fill", "q.circle", "q.circle.fill", "q.square", "q.square.fill", "r.circle", "r.circle.fill", "r.square", "r.square.fill", "s.circle", "s.circle.fill", "s.square", "s.square.fill", "t.circle", "t.circle.fill", "t.square", "t.square.fill", "u.circle", "u.circle.fill", "u.square", "u.square.fill", "v.circle", "v.circle.fill", "v.square", "v.square.fill", "w.circle", "w.circle.fill", "w.square", "w.square.fill", "x.circle", "x.circle.fill", "x.square", "x.square.fill", "y.circle", "y.circle.fill", "y.square", "y.square.fill", "z.circle", "z.circle.fill", "z.square", "z.square.fill", "dollarsign.circle", "dollarsign.circle.fill", "dollarsign.square", "dollarsign.square.fill", "centsign.circle", "centsign.circle.fill", "centsign.square", "centsign.square.fill", "yensign.circle", "yensign.circle.fill", "yensign.square", "yensign.square.fill", "sterlingsign.circle", "sterlingsign.circle.fill", "sterlingsign.square", "sterlingsign.square.fill", "francsign.circle", "francsign.circle.fill", "francsign.square", "francsign.square.fill", "florinsign.circle", "florinsign.circle.fill", "florinsign.square", "florinsign.square.fill", "turkishlirasign.circle", "turkishlirasign.circle.fill", "turkishlirasign.square", "turkishlirasign.square.fill", "rublesign.circle", "rublesign.circle.fill", "rublesign.square", "rublesign.square.fill", "eurosign.circle", "eurosign.circle.fill", "eurosign.square", "eurosign.square.fill", "dongsign.circle", "dongsign.circle.fill", "dongsign.square", "dongsign.square.fill", "indianrupeesign.circle", "indianrupeesign.circle.fill", "indianrupeesign.square", "indianrupeesign.square.fill", "tengesign.circle", "tengesign.circle.fill", "tengesign.square", "tengesign.square.fill", "pesetasign.circle", "pesetasign.circle.fill", "pesetasign.square", "pesetasign.square.fill", "pesosign.circle", "pesosign.circle.fill", "pesosign.square", "pesosign.square.fill", "kipsign.circle", "kipsign.circle.fill", "kipsign.square", "kipsign.square.fill", "wonsign.circle", "wonsign.circle.fill", "wonsign.square", "wonsign.square.fill", "lirasign.circle", "lirasign.circle.fill", "lirasign.square", "lirasign.square.fill", "australsign.circle", "australsign.circle.fill", "australsign.square", "australsign.square.fill", "hryvniasign.circle", "hryvniasign.circle.fill", "hryvniasign.square", "hryvniasign.square.fill", "nairasign.circle", "nairasign.circle.fill", "nairasign.square", "nairasign.square.fill", "guaranisign.circle", "guaranisign.circle.fill", "guaranisign.square", "guaranisign.square.fill", "coloncurrencysign.circle", "coloncurrencysign.circle.fill", "coloncurrencysign.square", "coloncurrencysign.square.fill", "cedisign.circle", "cedisign.circle.fill", "cedisign.square", "cedisign.square.fill", "cruzeirosign.circle", "cruzeirosign.circle.fill", "cruzeirosign.square", "cruzeirosign.square.fill", "tugriksign.circle", "tugriksign.circle.fill", "tugriksign.square", "tugriksign.square.fill", "millsign.circle", "millsign.circle.fill", "millsign.square", "millsign.square.fill", "shekelsign.circle", "shekelsign.circle.fill", "shekelsign.square", "shekelsign.square.fill", "manatsign.circle", "manatsign.circle.fill", "manatsign.square", "manatsign.square.fill", "rupeesign.circle", "rupeesign.circle.fill", "rupeesign.square", "rupeesign.square.fill", "bahtsign.circle", "bahtsign.circle.fill", "bahtsign.square", "bahtsign.square.fill", "larisign.circle", "larisign.circle.fill", "larisign.square", "larisign.square.fill", "bitcoinsign.circle", "bitcoinsign.circle.fill", "bitcoinsign.square", "bitcoinsign.square.fill", "brazilianrealsign.circle", "brazilianrealsign.circle.fill", "brazilianrealsign.square", "brazilianrealsign.square.fill", "0.circle", "0.circle.fill", "0.square", "0.square.fill", "1.circle", "1.circle.fill", "1.square", "1.square.fill", "2.circle", "2.circle.fill", "2.square", "2.square.fill", "3.circle", "3.circle.fill", "3.square", "3.square.fill", "4.circle", "4.circle.fill", "4.square", "4.square.fill", "4.alt.circle", "4.alt.circle.fill", "4.alt.square", "4.alt.square.fill", "5.circle", "5.circle.fill", "5.square", "5.square.fill", "6.circle", "6.circle.fill", "6.square", "6.square.fill", "6.alt.circle", "6.alt.circle.fill", "6.alt.square", "6.alt.square.fill", "7.circle", "7.circle.fill", "7.square", "7.square.fill", "8.circle", "8.circle.fill", "8.square", "8.square.fill", "9.circle", "9.circle.fill", "9.square", "9.square.fill", "9.alt.circle", "9.alt.circle.fill", "9.alt.square", "9.alt.square.fill", "00.circle", "00.circle.fill", "00.square", "00.square.fill", "01.circle", "01.circle.fill", "01.square", "01.square.fill", "02.circle", "02.circle.fill", "02.square", "02.square.fill", "03.circle", "03.circle.fill", "03.square", "03.square.fill", "04.circle", "04.circle.fill", "04.square", "04.square.fill", "05.circle", "05.circle.fill", "05.square", "05.square.fill", "06.circle", "06.circle.fill", "06.square", "06.square.fill", "07.circle", "07.circle.fill", "07.square", "07.square.fill", "08.circle", "08.circle.fill", "08.square", "08.square.fill", "09.circle", "09.circle.fill", "09.square", "09.square.fill", "10.circle", "10.circle.fill", "10.square", "10.square.fill", "11.circle", "11.circle.fill", "11.square", "11.square.fill", "12.circle", "12.circle.fill", "12.square", "12.square.fill", "13.circle", "13.circle.fill", "13.square", "13.square.fill", "14.circle", "14.circle.fill", "14.square", "14.square.fill", "15.circle", "15.circle.fill", "15.square", "15.square.fill", "16.circle", "16.circle.fill", "16.square", "16.square.fill", "17.circle", "17.circle.fill", "17.square", "17.square.fill", "18.circle", "18.circle.fill", "18.square", "18.square.fill", "19.circle", "19.circle.fill", "19.square", "19.square.fill", "20.circle", "20.circle.fill", "20.square", "20.square.fill", "21.circle", "21.circle.fill", "21.square", "21.square.fill", "22.circle", "22.circle.fill", "22.square", "22.square.fill", "23.circle", "23.circle.fill", "23.square", "23.square.fill", "24.circle", "24.circle.fill", "24.square", "24.square.fill", "25.circle", "25.circle.fill", "25.square", "25.square.fill", "26.circle", "26.circle.fill", "26.square", "26.square.fill", "27.circle", "27.circle.fill", "27.square", "27.square.fill", "28.circle", "28.circle.fill", "28.square", "28.square.fill", "29.circle", "29.circle.fill", "29.square", "29.square.fill", "30.circle", "30.circle.fill", "30.square", "30.square.fill", "31.circle", "31.circle.fill", "31.square", "31.square.fill", "32.circle", "32.circle.fill", "32.square", "32.square.fill", "33.circle", "33.circle.fill", "33.square", "33.square.fill", "34.circle", "34.circle.fill", "34.square", "34.square.fill", "35.circle", "35.circle.fill", "35.square", "35.square.fill", "36.circle", "36.circle.fill", "36.square", "36.square.fill", "37.circle", "37.circle.fill", "37.square", "37.square.fill", "38.circle", "38.circle.fill", "38.square", "38.square.fill", "39.circle", "39.circle.fill", "39.square", "39.square.fill", "40.circle", "40.circle.fill", "40.square", "40.square.fill", "41.circle", "41.circle.fill", "41.square", "41.square.fill", "42.circle", "42.circle.fill", "42.square", "42.square.fill", "43.circle", "43.circle.fill", "43.square", "43.square.fill", "44.circle", "44.circle.fill", "44.square", "44.square.fill", "45.circle", "45.circle.fill", "45.square", "45.square.fill", "46.circle", "46.circle.fill", "46.square", "46.square.fill", "47.circle", "47.circle.fill", "47.square", "47.square.fill", "48.circle", "48.circle.fill", "48.square", "48.square.fill", "49.circle", "49.circle.fill", "49.square", "49.square.fill", "50.circle", "50.circle.fill", "50.square", "50.square.fill", "applelogo"];

try {
    await main();
} catch (e) {
    Script.complete(e.message);
    throw e;
}

function applyArguments(config) {
    const isNumber = val => typeof(val) === 'number' && isFinite(val) && !isNaN(val);
    const isNumberArray = arr => arr instanceof Array && arr.every(isNumber);

    if (args.shortcutParameter == null)
        return;
    
    const data = {...args.shortcutParameter};

    if (typeof(data.orientation) === 'string')
        switch (data.orientation.toLowerCase()) {
            case 'portrait': config.isPortrait = true; break;
            case 'landscape': config.isPortrait = false; break;
        }

    if (isNumber(data.limitSymbols))
        config.symbols.globalIconsSet = Math.max(0, data.limitSymbols);

    if (isNumber(data.symbolAngle))
        config.symbols.angle = data.symbolAngle;

    if (isNumber(data.columns))
        data.columns = [data.columns];
    if (isNumberArray(data.columns))
        config.symbols.columns = data.columns;

    if (isNumber(data.symbolProportion))
        data.symbolProportion = [data.symbolProportion];
    if (isNumberArray(data.symbolProportion))
        config.symbols.ratios = data.symbolProportion;

    if (isNumber(data.iconScales))
        data.iconScales = [data.iconScales];
    if (isNumberArray(data.iconScales))
        config.symbols.scales = data.iconScales;

    if (isNumber(data.iconLimits))
        data.iconLimits = [data.iconLimits];
    if (isNumberArray(data.iconLimits))
        config.symbols.iconsSets = data.iconLimits;

    config.symbols.rowsOffsets = Array.from(config.symbols.ratios).fill(0);


    if (isNumber(data.colorAngle))
        config.colors.bgAngle = data.colorAngle;

    if (isNumber(data.colorProportion))
        data.colorProportion = [data.colorProportion];
    if (isNumberArray(data.colorProportion))
        config.colors.bgRatios = data.colorProportion;

    if (isNumber(data.symbolColorAngle))
        config.colors.fgAngle = data.symbolColorAngle;

    if (isNumber(data.symbolProportion))
        data.symbolProportion = [data.symbolProportion];
    if (isNumberArray(data.symbolProportion))
        config.colors.fgRatios = data.symbolProportion;

    
    if (typeof(data.themeName) === 'string') {
        const theme = defaultThemes[data.themeName];
        if (!theme)
            throw new Error('No such theme');

        if (theme.colors) {
            const colors = (theme.shuffle ? shuffle : a => a)(theme.colors);
            config.colors.bgColors = shifted(colors, theme.bgShift);
            config.colors.fgColors = shifted(colors, theme.fgShift);
        } else {
            config.colors.bgColors = (theme.bgShuffle ? shuffle : a => a)(theme.bgColors);
            config.colors.fgColors = (theme.fgShuffle ? shuffle : a => a)(theme.fgColors);
        }
    }
}

function loadConfig() {
    const config = defaultConfig;

    applyArguments(config);

    config.symbols.angle *= -Math.PI / 180.0;
    config.colors.bgAngle *= -Math.PI / 180.0;
    config.colors.fgAngle *= -Math.PI / 180.0;

    if (config.isPortrait)
        config.size = {
            width: Math.min(config.size.width, config.size.height),
            height: Math.max(config.size.width, config.size.height),
        };
    else
        config.size = {
            width: Math.max(config.size.width, config.size.height),
            height: Math.min(config.size.width, config.size.height),
        };

    return config;
}

function checkConfig(config) {
    if (config.symbols.columns.length != config.symbols.ratios.length)
        throw Error('Number of symbols columns and ratios should be the same');
    if (config.symbols.scales.length != config.symbols.ratios.length)
        throw Error('Number of symbols scales and ratios should be the same');
    if (config.symbols.iconsSets.length != config.symbols.ratios.length)
        throw Error('Number of symbols icons sets and ratios should be the same');
    if (config.symbols.rowsOffsets.length != config.symbols.ratios.length)
        throw Error('Number of symbols rows offsets and ratios should be the same');

    if (config.colors.bgColors.length == 0)
        throw Error('At least one background color should exist');
    if (config.colors.fgColors.length == 0)
        throw Error('At least one foreground color should exist');

    if (config.colors.bgRatios.length == 0)
        throw Error('At least one background section should exist');
    if (config.colors.fgRatios.length == 0)
        throw Error('At least one foreground section should exist');

    if (config.colors.bgRatios.some(a => a < 0))
        throw Error('All background color ratios should be positive');
    if (config.colors.fgRatios.some(a => a < 0))
        throw Error('All foreground color ratios should be positive');
}

async function main() {
    const config = loadConfig();
    checkConfig(config);

    let symbols = defaultSymbols;
    if (config.symbols.globalIconsSet && config.symbols.globalIconsSet < symbols.length)
        symbols = shuffle(symbols).slice(0, config.symbols.globalIconsSet);

    const pattern = generatePattern(symbols, config);
    const image = await renderPattern(pattern, config.size);

    await QuickLook.present(image, 1);
    Script.setShortcutOutput(Data.fromPNG(image).toBase64String());
}

function calculateVirtualScreen(size, angle) {
    const diag = Math.sqrt(size.width * size.width + size.height * size.height);
    const diagAngle = Math.atan2(size.height, size.width);
    const width = diag * Math.max(Math.abs(Math.cos(angle + diagAngle)), Math.abs(Math.cos(angle + Math.PI - diagAngle)));
    const height = diag * Math.max(Math.abs(Math.sin(angle + diagAngle)), Math.abs(Math.sin(angle + Math.PI - diagAngle)));
    return {width, height, angle};
}

function generateSectionPattern(size, symbols, columnsNumber, rowsOffset) {
    const columnWidth = size.width / columnsNumber;
    const lineHeight = columnWidth * Math.tan(30 / 180 * Math.PI);
    const linesNumber = Math.ceil(size.height / lineHeight) + 4;
    const offset = (size.height - lineHeight * (linesNumber - 1)) * 0.5 - 2 * lineHeight + lineHeight * ((rowsOffset % 2 + 3) % 2 - 1);

    const pattern = [];
    for (let line = 0; line < linesNumber; line++) {
        const symbol = selectRandom(symbols);
        for (let column = 1 + line % 2; column < columnsNumber; column += 2)
            pattern.push([column * columnWidth, offset + line * lineHeight, selectRandom(symbols)]);
    }

    return pattern;
}

function generateSymbolsPattern(size, config, symbols) {
    const virtScreen = calculateVirtualScreen(size, config.angle);
    const totalRatio = config.ratios.reduce((a, b) => a + b, 0);
    const baseWidth = virtScreen.width / totalRatio;
    const halfHeight = virtScreen.height * 0.5;
    const angleMath = {sin: Math.sin(config.angle), cos: Math.cos(config.angle)};

    const pattern = {};

    for (let i = 0, offset = -virtScreen.width * 0.5; i < config.ratios.length; i++) {
        if (config.ratios[i] > 0 && config.columns[i] > 1) {
            const tolerance = baseWidth * config.ratios[i] / config.columns[i];
            generateSectionPattern(
                {width: baseWidth * config.ratios[i], height: virtScreen.height},
                config.iconsSets[i] ? shuffle(symbols).slice(0, config.iconsSets[i]) : symbols,
                config.columns[i],
                config.rowsOffsets[i],
            )
                .map(([x, y, symbol]) => [x + offset, y - virtScreen.height * 0.5, symbol])
                .map(([x, y, symbol]) => [angleMath.cos * x + angleMath.sin * y, angleMath.cos * y - angleMath.sin * x, symbol])
                .map(([x, y, symbol]) => [x + size.width * 0.5, y + size.height * 0.5, symbol])
                .filter(([x, y, symbol]) => -tolerance <= x && x <= size.width + tolerance && -tolerance <= y && y <= size.height + tolerance)
                .forEach(([x, y, symbol]) => {
                    pattern[symbol] = pattern[symbol] || [];
                    pattern[symbol].push([x, y, config.scales[i]]);
                });
        }
        offset += config.ratios[i] * baseWidth;
    }

    return pattern;
}

function generateColorsSections(size, angle, colors, ratios) {
    const virtScreen = calculateVirtualScreen(size, angle);
    const totalRatio = ratios.reduce((a, b) => a + b, 0);
    const baseWidth = virtScreen.width / totalRatio;
    const halfHeight = virtScreen.height * 0.5;
    const angleMath = {sin: Math.sin(angle), cos: Math.cos(angle)};

    const sections = [];

    for (let i = 0, offset = -virtScreen.width * 0.5; i < ratios.length; i++) {
        sections.push([
            colors[i % colors.length],
            [
                [offset, -halfHeight],
                [offset + ratios[i] * baseWidth + 1, -halfHeight],
                [offset + ratios[i] * baseWidth + 1, halfHeight],
                [offset, halfHeight],
            ]
                .map(([x, y]) => [angleMath.cos * x + angleMath.sin * y, angleMath.cos * y - angleMath.sin * x])
                .map(([x, y]) => [x + size.width * 0.5, y + size.height * 0.5])
                .map(([x, y]) => `L${x} ${y}`)
                .join('').replace('L', 'M'),
        ]);
        offset += ratios[i] * baseWidth;
    }

    return sections;
}

function generatePattern(symbols, config) {
    const pattern = {
        symbols: generateSymbolsPattern(config.size, config.symbols, symbols),
        foregroundColors: generateColorsSections(config.size, config.colors.fgAngle, config.colors.fgColors, config.colors.fgRatios),
        backgroundColors: generateColorsSections(config.size, config.colors.bgAngle, config.colors.bgColors, config.colors.bgRatios),
    };

    return pattern;
}

function getSymbolData(symbolName) {
    const font = Font.systemFont(20);
    const symbol = SFSymbol.named(symbolName);
    symbol.applyFont(font);
    const image = symbol.image;

    return {
        base64: Data.fromPNG(image).toBase64String(),
        width: image.size.width * Device.screenScale(),
        height: image.size.height * Device.screenScale(),
    };
}

async function renderPattern(pattern, size) {
    let symbolsImages = Object.keys(pattern.symbols).map(symbol => [symbol, getSymbolData(symbol)]);
    symbolsImages = symbolsImages.map(([symbol, {base64, width, height}]) => 
        `<img id="@${symbol}" width="${width}px" height="${height}px" src="data:image/png;base64,${base64}"/>`);

    let html = `
        ${symbolsImages.join('')}
        <canvas id="resultCanvas"></canvas>
        <script>
            function renderColorSections(ctx, sections) {
                let width = ctx.canvas.width / sections.length;
                let height = ctx.canvas.height;
                for (let section of sections) {
                    ctx.fillStyle = section[0];
                    ctx.fill(new Path2D(section[1]));
                }
            }

            function renderSymbols(ctx, symbols) {
                for (let symbol in symbols) {
                    let symbolImg = document.getElementById('@' + symbol);

                    for (let coords of symbols[symbol])
                        ctx.drawImage(
                            symbolImg,
                            coords[0] - symbolImg.width * 0.5 * (coords[2] || 1),
                            coords[1] - symbolImg.height * 0.5 * (coords[2] || 1),
                            symbolImg.width * (coords[2] || 1),
                            symbolImg.height * (coords[2] || 1));
                }
            }

            function render(pattern, width, height) {
                let canvas = document.getElementById("resultCanvas");
                canvas.width = width; canvas.height = height;
                let ctx = canvas.getContext("2d");
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";

                renderSymbols(ctx, pattern.symbols);

                ctx.globalCompositeOperation = "source-atop";
                renderColorSections(ctx, pattern.foregroundColors);

                ctx.globalCompositeOperation = "destination-over";
                renderColorSections(ctx, pattern.backgroundColors);

                return getBase64();
            }

            function getBase64(format = "image/png", quality = 0.92) {
                let canvas = document.getElementById("resultCanvas");
                return canvas.toDataURL(format).split(',', 2)[1];
            }
        </script>
    `;

    let webview = new WebView();
    await webview.loadHTML(html);

    let base64 = await webview.evaluateJavaScript(`render(${JSON.stringify(pattern)}, ${size.width}, ${size.height})`);
    return Image.fromData(Data.fromBase64String(base64));
}

function shuffle(array) {
    array = Array.from(array);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function shifted(array, shift) {
    shift %= array.length;
    return array.slice(shift).concat(array.slice(0, shift));
}

function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}
