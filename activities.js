(() => {

  /* ==================================
     看山小｜活動資料管理中心
     未來新增活動，只需修改下方資料
  ================================== */

  const activities = [

    /*
    活動資料格式範例：

    {
      id: "pingfeng-20270515",
      name: "屏風山｜兩天一夜",
      startDate: "2027-05-15",
      endDate: "2027-05-16",
      difficulty: "高級挑戰",
      description: "百岳行程・山屋住宿",
      status: "籌備中",
      url: ""
    },

    */

  ];

  /* 取得台灣當地日期 */

  function getTaiwanDate() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());

    const values = {};

    parts.forEach(part => {
      values[part.type] = part.value;
    });

    return ${values.year}-${values.month}-${values.day};
  }

  /* 所有活動依日期排序 */

  function getAllActivities() {
    return [...activities].sort((a, b) =>
      a.startDate.localeCompare(b.startDate)
    );
  }

  /* 篩選尚未結束的活動 */

  function getUpcomingActivities() {
    const today = getTaiwanDate();

    return getAllActivities().filter(activity => {
      const endDate =
        activity.endDate || activity.startDate;

      return endDate >= today &&
        activity.status !== "已結束" &&
        activity.status !== "已取消";
    });
  }

  /* 建立單筆活動清單 */

  function createActivityItem(activity) {

    const item = document.createElement(
      activity.url ? "a" : "div"
    );

    item.className = "activity-item";

    if (activity.url) {
      item.href = activity.url;
    }

    const [year, month, day] =
      activity.startDate.split("-");

    const date = document.createElement("div");
    date.className = "activity-date";

    const monthText = document.createElement("span");
    monthText.className = "activity-month";
    monthText.textContent = ${year} / ${month}月;

    const dayText = document.createElement("span");
    dayText.className = "activity-day";
    dayText.textContent = day;

    date.append(monthText, dayText);

    const info = document.createElement("div");
    info.className = "activity-info";

    const name = document.createElement("p");
    name.className = "activity-name";
    name.textContent = activity.name;

    const description = document.createElement("p");
    description.className = "activity-description";

    description.textContent = [
      activity.difficulty,
      activity.description
    ].filter(Boolean).join("・");

    const status = document.createElement("span");
    status.className = "activity-status";
    status.textContent = activity.status;

    info.append(name, description, status);

    item.append(date, info);

    if (activity.url) {
      const arrow = document.createElement("span");
      arrow.className = "activity-arrow";
      arrow.textContent = "›";
      arrow.setAttribute("aria-hidden", "true");
      item.appendChild(arrow);
    }

    return item;
  }

  /* 首頁最多顯示五場活動 */

  function renderHomepageActivities() {

    const list = document.getElementById("activityList");

    if (!list) return;

    const upcoming =
      getUpcomingActivities().slice(0, 5);

    list.replaceChildren();

    if (upcoming.length === 0) {

      const empty = document.createElement("p");
      empty.className = "activity-empty";
      empty.textContent =
        "近期活動籌備中，敬請期待。";

      list.appendChild(empty);

      return;
    }

    upcoming.forEach(activity => {
      list.appendChild(createActivityItem(activity));
    });
  }

  /* 提供其他頁面共用活動資料 */

  window.KanShanXiaoActivities = {
    getAllActivities,
    getUpcomingActivities,
    createActivityItem
  };

  /* 網頁載入後自動執行 */

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      renderHomepageActivities
    );
  } else {
    renderHomepageActivities();
  }

})();
